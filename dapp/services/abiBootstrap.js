(
  function() {
    angular
    .module("multiSigWeb")
    .service("AbiBootstrap", function(ABI) {
      var factory = {};
      
      factory.load = function() {
        ABI.update(TokenVestingFactoryAbi, '0x98ffd592829e685cb1364a7e5f5f49f3125c983c', 'TokenVestingFactory');
        ABI.update(EptTokenAbi, '0x23cacc84ce73a3f635ef691041ebafb56e9722b5', 'EptToken');
      }

      return factory;
    })
  }
)();
