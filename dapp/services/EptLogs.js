(
  function() {
    angular
    .module("multiSigWeb")
    .service("EptLogs", function($window) {
      var factory = {};
    
      function formatDate(ms) {
        var date = new Date(ms);
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }

      function months(secs) {
        return Math.ceil(secs * 3.8052e-7);
      }

      function fromSolDate(ts){
        return Math.ceil(ts * 1000);
      } 

      function beautifyParam(param) {
        switch(param.name) {
          case '_beneficiary':
            param.name = 'Beneficiary';
            break;
          case '_to':
            param.name = 'Destination';
            break;
          case '_amount':
            param.name = 'Amount';
            param.value = $window.web3.fromWei(param.value, 'ether');
            break;
          case '_start':
            param.name = 'Starts';
            param.value = formatDate(fromSolDate(param.value));
            break;
          case '_cliff':
            param.name = 'Cliff';
            param.value = '' + months(param.value) + ' months';
            break;
          case '_duration':
            param.name = 'Duration'; 
            param.value = '' + months(param.value) + ' months';
            break;
          case '_revocable':
            param.name = 'Revocable?';
            param.value = param.value.toString();
            break;
        }

        return param;
      }

      factory.beautify = function(params) {
        return params.map((param) => {
          return beautifyParam(param);
        })
      }

      return factory;
    })
  }
)();
