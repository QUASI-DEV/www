// defines some status-functions

var daoStatus = {
  
  settings : {
     clients : ['37.120.164.112:8545'],
     id : parseInt(Math.abs(Math.random()*10000)),
     dao: '0x54715db7a8a57bc9bab660eb8e7b195774cb564d',
     
     sendRequest: function(method,params,cb) {
        if (!this.host)  {
           var index = Math.random()*this.clients.length;
           this.host = this.clients[parseInt(index)];
        }
        
        $.post("http://"+this.host, JSON.stringify({
           jsonrpc:"2.0",
           method:method,
           params: params,
           id: (this.id=this.id+1)
           
        }), function(data) {
           cb(data.result);
        });
     }
  },
  
  normalize : function(adr) {
    if (adr.indexOf("0x")>=0) adr=adr.substring(2);
    while (adr.length<40) adr="0"+adr; 
    return adr;
  },
  
  myStatus : function(adr, cb) {
     
     this.settings.sendRequest("eth_call",[{
        to : this.settings.dao,
        data : '0x70a08231'+ this.normalize(adr)
        
     },'latest'],cb);
     
     
//     this.settings.sendRequest("eth_blockNumber",[],cb);
  } ,
  
  tokensSold : function(cb) {
     
     this.settings.sendRequest("eth_getBalance",[this.settings.dao,'latest'],cb);
  } 
  
  
   
};