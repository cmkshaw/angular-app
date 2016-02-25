angular.module('website').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/cv', {
    templateUrl: 'routes/cv/cv.html',
    controller: 'cv',
    controllerAs: 'vm'
  });

}]);
