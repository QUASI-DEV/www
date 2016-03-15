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
.directive("ethaddress", function(){
   // requires an isloated model
   return {
      // restrict to an attribute type.
      restrict: 'A',
      // element must have ng-model attribute.
      require: 'ngModel',
      link: function(scope, ele, attrs, ctrl){

         // add a parser that will process each time the value is
         // parsed into the model when the user updates it.
         ctrl.$parsers.unshift(function(value) {
            if(value){
               // test and set the validity after update.
               var valid = isValidAddress(value);
               ctrl.$setValidity('ethaddress', valid);
            }

            // if it's valid, return the value to the model,
            // otherwise return undefined.
            return valid ? value : undefined;
         });

      }
   }
});


// register a compare-directive
angular.module('crowdsale').directive("compareTo", function() {
    return { require: "ngModel",  scope: {  otherModelValue: "=compareTo"  }, link:  function(scope, element, attributes, ngModel) {
        ngModel.$validators.compareTo = function(modelValue) {    return modelValue == scope.otherModelValue;  };
        scope.$watch("otherModelValue", function()           {    ngModel.$validate();                        });
    }};
});

function s4() {
   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
function isValidAddress(adr) {
   if (!adr) return false;
   if (adr.indexOf("0x")==0) adr=adr.substring(2);
   var pattern =  /[0-9a-fA-F]{40}/g;
   return pattern.test(adr) && adr.length==40;
}

function CrowdsaleController( $scope, $mdBottomSheet, $mdDialog,  $log, $q, $http, accountService) {

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
         $mdDialog.show( $mdDialog.confirm()
               .title('Terms and Conditions of the Slock Token Sale')
               .content(marked(response.data))
               .ariaLabel('T&C')
               .targetEvent(ev)
               .ok('Accept')
               .cancel('Cancel'))
         .then(function() {
            $scope.acceptedTC = true;
         });
      });
  };

  // determine the OS and set the download-link
  $scope.mist_link = detectMistLink();
  
  
  
  
   // user-options
   $scope.accountProgress = 0;
   $scope.daoAddress      = "0x54715db7a8a57bc9bab660eb8e7b195774cb564d";
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
}




})();

// create init-function
