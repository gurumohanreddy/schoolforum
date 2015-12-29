(function() {
  'use strict';

  angular
    .module('schoolforum')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');

    // $http.defaults.headers.common['X-Parse-Application-Id'] = 'OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW';
    // $http.defaults.headers.common['X-Parse-REST-API-Key'] = 'TKEZxU6JOZAsTwlpbPhAnJlstvn938KtuzNhFDCU';
  }

})();
