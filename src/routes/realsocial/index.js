angular.module('website').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/realsocial', {
    templateUrl: 'routes/realsocial/realsocial.html',
    controller: 'realsocial',
    controllerAs: 'vm'
  });

}]);
