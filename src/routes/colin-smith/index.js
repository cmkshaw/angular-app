angular.module('website').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/colin-smith', {
    templateUrl: 'routes/colin-smith/colin-smith.html',
    controller: 'colin-smith',
    controllerAs: 'vm'
  });

}]);
