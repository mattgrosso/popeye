(function() {
  'use strict';

  angular
    .module('popeye', ['ui.router', 'ngStorage'])
    .config(popeyeConfig);

  popeyeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function popeyeConfig($stateProvider, $urlRouterProvider) {
    console.log($stateProvider, $urlRouterProvider);
  }
})();

(function() {
  'use strict';

  angular
    .module('popeye')
    .controller('MainController', MainController);

  function MainController() {

    this.geoLocate = function geoLocate() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log(position);
          return {
            lat: position.coords.latitude,
            long: position.coords.longitude
          };
        });
      } else {
        return 'not available';
      }
    };

    this.geoLocate();
  }
})();

//# sourceMappingURL=main.js.map