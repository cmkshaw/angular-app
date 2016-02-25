angular.module('website').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/freshbooks', {
    templateUrl: 'routes/freshbooks/freshbooks.html',
    controller: 'freshbooks',
    controllerAs: 'vm'
  });

}]);
