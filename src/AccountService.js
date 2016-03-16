/* global Web3 */
/* global BigNumber */
/* global Buffer */
/* global Accounts */
(function(){

var scryptsy  = require("scryptsy");
var crypt_aes = aesjs;
var ethUtil   = require('ethereumjs-util');

var gas      = 50000;
var gasPrice = 56000000000;
var fnHash   = "0xa4821719";



function toHex(val) {
   return "0x"+new BigNumber(val).toString(16);
}

function nextNonce(adr) {
      if (!localStorage) return 0;
      var n = localStorage.getItem("nonce_"+adr);
      if (n=== undefined || n===null) n=-1;
      n=parseInt(n)+1;
      localStorage.setItem("nonce_"+adr,n);
      return n; 
}

function getValueWithoutGas(value) {
    return new BigNumber(value).minus(gas*gasPrice);
}


angular.module('crowdsale').service('accountService', ['$q','$http','$interval', function($q,$http,$interval) {

   
   // init web3 && accounts
   var web3 = new Web3();
   return {
      
      getAccounts : function() {
         return this.accountList || (this.accountList = accounts.list());
      },
      
      // create the account and returns a primse with the account.
      createAccount :  function(passphrase) {
         var d          = $q.defer();
         var _          = this;
         var secretSeed = lightwallet.keystore.generateRandomSeed();
         
         lightwallet.keystore.deriveKeyFromPassword(passphrase, function (err, pwDerivedKey) {

            _.ks = new lightwallet.keystore(secretSeed, pwDerivedKey);

            // generate a new address/private key pairs
            // the corresponding private keys are also encrypted
            _.ks.generateNewAddress(pwDerivedKey);
            var addr = _.ks.getAddresses()[0];

            // Create a custom passwordProvider to always return the password used when creating.
            _.ks.passwordProvider = function (callback) {  callback(null, passphrase);  };
            
            _.accountList=[{
               address : "0x"+addr,
               private : _.ks.exportPrivateKey(addr, pwDerivedKey)
            }];
            
            
            
            d.resolve(_.accountList[0]);
        });
        this.accountList=null;
        return d.promise;
      },
      
      // starts a webworker to encrypt the private key.
      createExportData :  function(account, passphrase, $scope) {
         var d = $q.defer();
         
         // start worker with eventHandler
         var worker = new Worker('src/accountWorker.js');
         worker.addEventListener("message", function(ev) {
            var data = ev.data;
            if (data.action=='progress' && data.val - $scope.accountProgress > 1) {
               $scope.accountProgress=data.val;
               $scope.$apply();
               $("#accountProgress").html(" "+parseInt(data.val)+"% done ");
            }
            else if (data.action=='done') {
               $scope.accountProgress=0;
               $("#accountProgress").html("");
               d.resolve(data.result);
            }
         });
         worker.onerror = function(ev) {
            $scope.accountProgress=0;
            $("#accountProgress").html("");
            d.reject(ev.message);
         }
         
         // start the export-event
         worker.postMessage({action:'export', account: account, passphrase:passphrase, randomBuffer:crypto.getRandomValues(new Uint8Array(64))});
         return d.promise;
      },

      signTransaction : function(options) {
         var d            = $q.defer();
         var tx           = { 
            from     : options.account, 
            to       : options.to,
            gas      : toHex(gas), 
            gasPrice : toHex(gasPrice), 
            value    : toHex(getValueWithoutGas(web3.toWei(options.amount,'ether'))),
            data     : fnHash,
            nonce    : toHex(nextNonce(options.account))
          };
         
         this.ks.signTransaction(tx, function(err, raw_tx) {
            if (err != null)     d.reject("Could not sign the transaction : "+err);
            else                 d.resolve({ data:raw_tx, value: web3.toWei(options.amount,'ether')});
          });
          return d.promise;
      } 
      
   };
   
}]);

})();

