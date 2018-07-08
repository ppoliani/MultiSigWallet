(
  function() {
    angular
    .module("multiSigWeb")
    .service("abiBootstrap", function(ABI) {
      var factory = {};
      
      factory.load = function() {
        ABI.update(TokenVestingFactoryAbi, '', 'TokenVestingFactory')
      }

      return factory;
    })
  }
)();
