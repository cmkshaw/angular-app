angular.module('website').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/panasonic', {
    templateUrl: 'routes/panasonic/panasonic.html',
    controller: 'panasonic',
    controllerAs: 'vm'
  });

}]);
