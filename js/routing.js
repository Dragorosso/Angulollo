/**
 * Created by andre on 09/05/2017.
 */
angular.module('andlollo',['ngRoute'])
    .config(function($routeProvider) {
    $routeProvider

        .when('/signup', {
            templateUrl: 'html/signup.html'
        })
        .when('/profile', {
            templateUrl: 'html/profile.html'
        })
        .when('/examplePage',{
            templateUrl: 'html/examplePage.html'
    });
});