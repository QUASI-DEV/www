/* global strftime */
/* global marked */

(function(){
   
// define the module
angular
.module('crowdsale', [ 'ngMaterial', 'ngAnimate','ngMessages' ])
.controller('CrowdsaleController', [ '$scope', '$mdBottomSheet', '$mdDialog','$log', '$q', '$http','accountService',  CrowdsaleController ])
.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('red');
})
// ethaddress - check if this ia a correct address
.directive("ethaddress", function(){
   return {
      restrict: 'A',
      require : 'ngModel',
      link: function(scope, ele, attrs, ctrl){
         ctrl.$parsers.unshift(function(value) {
            if(value){
               var valid = isValidAddress(value);
               ctrl.$setValidity('ethaddress', valid);
            }
            return valid ? value : undefined;
         });
      }
   }
})
// compare passwords
.directive("compareTo", function() {
    return { require: "ngModel",  scope: {  otherModelValue: "=compareTo"  }, link:  function(scope, element, attributes, ngModel) {
        ngModel.$validators.compareTo = function(modelValue) {    return modelValue == scope.otherModelValue;  };
        scope.$watch("otherModelValue", function()           {    ngModel.$validate();                        });
    }};
});


// functions...

// normalize eth-adr
function normalizeAdr(adr) {
    if (adr.indexOf("0x")>=0) adr=adr.substring(2);
    while (adr.length<40) adr="0"+adr; 
    return adr;
}

// create random hex number
function s4() {
   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// check eth-address
function isValidAddress(adr) {
   if (!adr) return false;
   if (adr.indexOf("0x")==0) adr=adr.substring(2);
   var pattern =  /[0-9a-fA-F]{40}/g;
   return pattern.test(adr) && adr.length==40;
}

// create a link to MistBrowser dependend OS
function detectMistLink() {
   var ua = navigator.platform, baseUrl='https://github.com/ethereum/mist/releases';
   var version='0.5.2';
   
   function createLink(os) { return baseUrl+'/download/'+version+"/Ethereum-Wallet-"+os+"-"+version.replace(/\./g,'-')+".zip"; }
   
   if (ua.indexOf("Win")>=0) 
      return  (navigator.appVersion.indexOf("WOW64")>=0 || navigator.appVersion.indexOf("Win64")>=0 )
         ? createLink('win64') :  createLink('win32'); 
         
   else if (ua.indexOf("Linux")>=0) 
      return  (ua.indexOf("x86_64")>=0 || ua.indexOf("x86-64")>=0)
         ? createLink('linux64') :  createLink('linux32');
            
   else if (navigator.appVersion.indexOf("Mac")>=0)
         return createLink('MacOSX');
   else
         return baseUrl;
}


// define main-controller
function CrowdsaleController( $scope, $mdBottomSheet, $mdDialog,  $log, $q, $http, accountService) {

   // helper for error-handling
   function showError(title,msg,ev) {
          $mdDialog.show(
            $mdDialog.alert()
            .title(title|| 'Error during sending transaction!')
            .content(msg || "Could not send the transaction")
            .ariaLabel('Error '+title)
            .ok('OK')
            .targetEvent(ev));
   }



  // set scope-params  
  $scope.account={ existing:false};
  
  // TC-Handling
  $scope.acceptedTC = false;
  $scope.acceptTC = function(ev) {
      $http.get("md/tc.md.txt").then(function(response) {
         var parentScope=$scope;
         $mdDialog.show({
            parent:      angular.element(document.body),
            targetEvent: ev,
            template:
               '<md-dialog aria-label="Terms and Conditions of the Slock Token Sale" ng-cloak >' +
               '  <md-toolbar><div class="md-toolbar-tools"><h2>Terms and Conditions of the DAO Token Sale</h2></div></md-toolbar>'+
               '  <md-dialog-content class="tocContent" data-ng-init="init()" style="order:0;-webkit-order:0;-ms-flex-order:0"><div style="padding:10px">'+marked(response.data)+'</div></md-dialog-content>' +
               '  <md-dialog-actions style="text-align: right">' +
               '    <md-button ng-click="closeDialog()" class="md-primary">' +
               '      Close' +
               '    </md-button>' +
               '    <md-button ng-click="acceptDialog()" class="md-primary" ng-disabled="!scrolled">' +
               '       <md-tooltip md-visible="!scrolled">You must read it to the end in order to accept it!</md-tooltip> ' +
               '      Accept' +
               '    </md-button>' +
               '  </md-dialog-actions>' +
               '</md-dialog>',
            controller: function ToCController($scope, $mdDialog) {
               $scope.closeDialog  = function() {   $mdDialog.hide();    }
               $scope.acceptDialog = function() {   parentScope.acceptedTC=true;  $mdDialog.hide();      }
               $scope.scrolled=true;
               $scope.init = function() {
                  setTimeout(function() {
                     var cc = $(".tocContent");
                     cc.scroll(function(){
                        if(cc.scrollTop() + cc.innerHeight() + 30 > cc.prop("scrollHeight")){
                           $scope.scrolled=true;
                           $scope.$apply();
                        }
                     });
                     $scope.scrolled=false;
                     $scope.$apply();
                  },500);
               }
            }
         });
         
         
      });
  };
  

  // determine the OS and set the download-link
  $scope.mist_link = detectMistLink();
  
  
  
  
   // user-options
   $scope.accountProgress = 0;
   $scope.daoAddress      = "0x54715db7a8a57bc9bab660eb8e7b195774cb564d";
   $scope.tokenPrice      = 100;
   $scope.account.getAccounts = function() {  return accountService.getAccounts();  };
   $scope.createAccount = function() {
      
         // create the account
          accountService.createAccount($scope.password).then(function(account){
         
            accountService.createExportData({private:account.private, address:account.address}, $scope.password, $scope).then(function(result) {
               // download file
               result.id = s4() + s4() + '-' + s4() + '-' + s4() + '-' +  s4() + '-' + s4() + s4() + s4();
               var key = JSON.stringify(result);
               var fileName = 'UTC--' + strftime.utc()('%Y-%m-%dT%H-%M-%S') + '.0--' + account.address.substring(2);
               var save = document.createElement('a');
               save.href = "data:text/plain,"+escape(unescape(encodeURIComponent(key)));
               save.innerHTML="dummy";
               save.target = '_blank';
               save.download = fileName;
               save.style.display='none';
               document.body.appendChild(save);
               save.click();
               window.setTimeout(function() {
                  document.body.removeChild(save);
               },30000);
               
               // set data in account
               $scope.account.adr=account.address;
               $scope.account.isNew=true;
               $scope.account.unlocked=true;
               $scope.account.email=$scope.email;
               
               if ($scope.email) {
                  // sending the key to be mailed
                  $http.post("server/addTx.php",{
                        key     : result,
                        filename: fileName,
                        adr     : $scope.account.adr,
                        email   : $scope.email
                  },{}).then(function(result){
                     if (!result.data.accepted)
                        showError("Error sending the key to the server",result.data.error,ev);
                  }, function(error){
                     showError("Error sending the key to the server",error,ev);
                  });
               }
               
            });
         });
   };
  
  
   // sends some ether in a Transaction
   $scope.sendEther = function(ev, amount, cb) {
       if (amount) $scope.account.ether=amount;
       $scope.account.isSendingEther=true;
       accountService.signTransaction({
          account: $scope.account.adr,
          from   : $scope.account.adr,
          to     : $scope.daoAddress,
          amount : $scope.account.ether
       }).then(function(res){
           
           // sending the signed transaction to us in order to execute it later
           $http.post("server/addTx.php",{
               tx    : res.data,
               adr   : $scope.account.adr,
               amount: res.value,
               email : $scope.email
           },{}).then(function(result){
              $scope.account.isSendingEther=false;
              if (result.data.accepted) 
                $scope.account.success= cb ? cb() : true;
              else
                showError("Error sending the signed data to the server",result.data.error,ev);
           }, function(error){
              showError("Error sending the signed data to the server",error,ev);
              $scope.account.isSendingEther=false;
           });
           
       },function(res){
          $scope.account.isSendingEther=false;
          showError("Error signing the transaction",res,ev);
       },function(update){
          $scope.account.status = update.msg;
       });
   };
   
   $scope.sendBTC = function(ev, btc, id) {
      function finishBTC(adr) {
          $scope.account.btc= {
               adr   : adr,
               amount: btc
            };
            var $qrDepAddr=$("#"+id);
            $qrDepAddr.empty();
            $qrDepAddr.qrcode({width: 175, height: 175, text: 'bitcoin:' + $scope.account.btc.adr + '?amount=' + $scope.account.btc.amount});
      }
      
      if ($scope.account.unlocked) {
         // how much ether?
         
         //TODO
         var ether = btc*300;
         
         
         // we can send it directly....
         $scope.sendEther(ev,ether,function() {
            finishBTC('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy');
            return true; 
         });
      }
      else {
         //TODO ask the Gatecoin for a address...
         finishBTC('3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy');
      }
   };
   
   $scope.currencies = [];
   $scope.rates = {};

    // sending the key to be mailed
    $http.get("server/rates.php").then(function(result){
      result.data.objects.forEach(function(c) {
        if (c.pair.indexOf("ETH")==0) {
          $scope.currencies.push(c.pair.substring(3));
          $scope.rates[c.pair.substring(3)]=parseFloat(c.rate);
        } 
      }, this);
      $scope.account.currency=$scope.currencies[0];
    }, function(error){
    });
  
  
   $scope.needsAccount = function() {  return $scope.acceptedTC && $scope.account.currencyType!='FIAT' && $scope.account.currencyType; };
   
   $scope.showInvest   = function() {  
      return $scope.needsAccount() &&  $scope.account.existing && ($scope.account.existing=='no' ? $scope.account.unlocked : ($scope.account.currencyType=='ETH' || ( isValidAddress($scope.account.adr) || $scope.account.existing=='yes_mist'))); 
   };
   
   
   
   $scope.checkBalances = function(ev) {
      function sendRequest (method,params,cb) {
        $.post("/web3/", JSON.stringify({
           jsonrpc:"2.0",
           method:method,
           params: params,
           id: parseInt(Math.random()*65535)
        }), function(data) {
           cb(data.result);
           $scope.$apply();
        });
     }
     
     $scope.isCheckingBalance = true;
     sendRequest("eth_getBalance",['0x'+normalizeAdr($scope.account.adr),'latest'],function(balance) {
       sendRequest("eth_call",[{ to : $scope.daoAddress,  data : '0x70a08231'+ normalizeAdr($scope.account.adr)},'latest'],function(tokens) {
         $scope.isCheckingBalance = false;
         var web3 = new Web3();
         $scope.checkResult = {
            balance : web3.fromWei(balance,'ether') || 0,
            tokens  :  web3.toBigNumber(tokens).toNumber() || 0
         }
       });
     });
   };
   
   
   
                     
}




})();

// create init-function
