(function() {
  'use strict';

  angular
    .module('schoolforum')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
