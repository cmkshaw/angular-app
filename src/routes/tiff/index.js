angular.module('website').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/tiff', {
    templateUrl: 'routes/tiff/tiff.html',
    controller: 'tiff',
    controllerAs: 'vm'
  });

}]);
