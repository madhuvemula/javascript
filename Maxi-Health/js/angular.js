var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/section-bar-1", {
        templateUrl : "./operation.html#section-bar-1"
    })
    .when("/section-bar-2", {
        templateUrl : "./operation.html#section-bar-2"
    })
    .when("/section-bar-3", {
        templateUrl : "./operation.html#section-bar-3"
    })
    .when("/section-bar-4", {
        templateUrl : "./operation.html#section-bar-4"
    })
    .when("/section-bar-5", {
        templateUrl : "./operation.html#section-bar-5"
    })
    .otherwise({
        template : "/operation.html#section-bar-1"
    });
});