'use strict';
/* main App Controllers */
 
var mainAppControllers = angular.module('mainAppControllers', [ 'angular-flash.service', 'angular-flash.flash-alert-directive' ])
                                .config(function (flashProvider) {
                                    // Support bootstrap 3.0 "alert-danger" class with error flash types
                                    flashProvider.errorClassnames.push('alert-danger');
                                });

mainAppControllers.controller('mainController', ['$scope','$http',
    function ($scope, $http) {
        //Obtención datos totales
        $http({method: 'GET', url:'/query'}).
        success(function(data, status, headers, config) {

            //Resultados Query
            var totales = data["2016"].totales;
            var positivos = data["2016"].positivos;
            var negativos = data["2016"].negativos;
            var neutros = data["2016"].neutros;
            var categorizados = data["2016"].clasificados;

            //Variables para la vista
            $scope.positivosTotales = positivos;
            $scope.negativosTotales = negativos;
            $scope.neutrosTotales = neutros;    //Revisar
            $scope.categorizados = categorizados;
            $scope.tweetsTotales = totales+500;

        }).
        error(function(data, status, headers, config){
            console.log("data:" +data.message);
        });

        $http({method: 'GET', url:'/queryNegativos'}).
        success(function(data, status, headers, config){
            console.log(data);
            $scope.negativos= data;
        }).
        error(function(data, status, headers, config){
            console.log("data:" +data.message);
        });

        $http({method: 'GET', url:'/queryPositivos'}).
        success(function(data, status, headers, config){
            console.log(data);
            $scope.positivos= data;
        }).
        error(function(data, status, headers, config){
            console.log("data:" +data.message);
        });

        $http({method: 'GET', url:'/queryNeutros'}).
        success(function(data, status, headers, config){
            console.log(data);
            $scope.neutrals= data;
        }).
        error(function(data, status, headers, config){
            console.log("data:" +data.message);
        });

    }
]);
