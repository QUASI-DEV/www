// defines some status-functions

$( document ).ready(function() {
 
    
      
   $('#dao_account_form').submit(function(event){
      event.preventDefault();
      // normalize eth-adr
      function normalizeAdr(adr, len) {
         if (adr.indexOf("0x")>=0) adr=adr.substring(2);
         while (adr.length< (len || 40)) adr="0"+adr; 
         return adr;
      }

      function round(val,len) {
         if (!val) return 0;
         len = len || 100;
         return Math.round(val*len)/len;
      }

      function sendRequest (method,params,cb) {
         $.post("/web3/", JSON.stringify({
            jsonrpc:"2.0",
            method:method,
            params: params,
            id: parseInt(Math.random()*65535)
         }), function(data) {
            cb(data.result);
         });
      }
      
      var adr = $("#dao_account_adr").val();

      sendRequest("eth_getBalance",['0x'+normalizeAdr(adr),'latest'],function(balance) {
         sendRequest("eth_call",[{ to : window.daoStats.dao,  data : '0x70a08231'+ normalizeAdr(adr,64)},'latest'],function(tokens) {
            var web3 = new Web3();
            $("#dao_account_tokens").html(""+(round(web3.fromWei(tokens,'ether')) || 0)/100);
            $("#dao_account_balance").html(""+(round(web3.fromWei(balance,'ether')) || 0));
            $("#dao_account_result").show();
         });
      });

   });    
      
      
      
    
    
    
});



     

