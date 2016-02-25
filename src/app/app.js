/**
 * @ngdoc overview
 * @name website
 *
 * @description
 * Generated by Yo men
 *
 * **Note:** Describe what this module does
 *
 * @example
  http://localhost:8000
 */

angular.module('website', [ 'ngMaterial',
'ngRoute'
])
.config([ '$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'routes/main/main.html',
        controller: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

}])
/**
 * @ngdoc overview
 * @name $rootScope
 *
 * @description
 * Global Utility functions attached on the $rootScope of the ngdocs module
 **/
.run([ '$rootScope', '$location', function($rootScope,$location) {
  /**
   *
   * @ngdoc function
   * @name $rootScope.isActive
   *
   * @description
   * Global utility function,
   * used to apply active classes to link buttons
   *
   * @example
   <pre>
     <a href="/example" ng-class="{ 'active': isActive('/example') }">
       Example
     </a>
   </pre>
   */
  $rootScope.isActive = function (href) {
    return href === $location.path();
  };
}]);
