angular.module('website').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/simple-therapy', {
    templateUrl: 'routes/simple-therapy/simple-therapy.html',
    controller: 'simple-therapy',
    controllerAs: 'vm'
  });

}]);
