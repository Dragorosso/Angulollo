
myApp.config(function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
        })
        .when("/about/:id", {
            templateUrl: "about.html",
        })
        .when("/limone", {
            templateUrl: "limone.html",
        })
        .when("/contact", {
            templateUrl: "contact.html",
        })



});

