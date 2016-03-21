if (window.includeTokeSale) {


   // include css
   [
      'https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic',
      './bower_components/angular-material/angular-material.css',
      'assets/app.css'
   ].forEach(function(path) {
         document.write('\x3Clink rel="stylesheet" href="'+path+'"/>');
   });


   // include scripts
   [
   './src/stats.js',
   './bower_components/angular/angular.min.js',
   './bower_components/angular-animate/angular-animate.min.js',
   './bower_components/angular-messages/angular-messages.min.js',
   './bower_components/angular-aria/angular-aria.min.js',
   './bower_components/angular-material/angular-material.min.js',
      
   './bower_components/strftime/strftime.js',
   './bower_components/qrcode/dist/jquery.qrcode.min.js',
   './bower_components/web3/dist/web3.min.js',
   './bower_components/hooked-web3-provider/build/hooked-web3-provider.min.js',
   './bower_components/eth-lightwallet/dist/lightwallet.min.js',
   './bower_components/underscore/underscore-min.js',
   './bower_components/bignumber.js/bignumber.min.js',
   './bower_components/marked/lib/marked.js',
   './bower_components/buffer/buffer.min.js',
   './src/scryptsy.js',
   './src/aes.js',
   './src/ethutil.js',
   './src/CrowdsaleController.js',
   './src/AccountService.js',
   ].forEach(function(path) {
         document.write('\x3Cscript type="text/javascript" src="'+path+'">\x3C/script>');
   });


}