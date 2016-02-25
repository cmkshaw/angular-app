angular.module('website').config([ '$routeProvider',
function ($routeProvider) {

  $routeProvider.when('/tiff-schedule', {
    templateUrl: 'routes/tiff-schedule/tiff-schedule.html',
    controller: 'tiff-schedule',
    controllerAs: 'vm'
  });

}]);
