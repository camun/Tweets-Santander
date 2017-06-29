'use strict';

var mainApp = angular.module('mainApp', [ 'ngRoute', 'mainAppControllers' ]);
/*
mainApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        //Acá llega para el control de vistas (Se supone que en una sola vista se pueden cambiar los templates)
        console.log("In the route controller function");
        $routeProvider.
            when('/login', {
                templateUrl: 'partial/login',
                controller: 'LoginCtrl'
            }).
            when('/register', {
                templateUrl: 'partial/register',
                controller: 'RegistrationCtrl'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }
]);
*/