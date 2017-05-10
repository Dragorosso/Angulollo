/**
 * Created by andre on 09/05/2017.
 */
angular.module('andlollo',['ngRoute'])
    .config(function($routeProvider) {
    $routeProvider

        .when('/signup', {
            templateUrl: 'html/signup.html'
        });
});