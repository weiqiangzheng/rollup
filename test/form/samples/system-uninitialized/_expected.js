System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      exports('p', void 0);
      exports('globalVar', globalVar);
      exports('q', q);
      var p;
      function q () {
        p = exports('p', 10);
      }

    }
  };
});
