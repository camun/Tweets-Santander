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

            //fecha hoy
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();

            if(dd<10) {
                dd = '0'+dd
            }

            if(mm<10) {
                mm = '0'+mm
            }

            $scope.today = mm + '/' + dd + '/' + yyyy;

            /*
             * BAR CHART
             * ---------
             */
            var bar_data = {
              data: [["Ene", 0], ["Feb", 0], ["Mar", 0], ["Abr", 0], ["May", data["2016"].mayo.totales], ["Jun", data["2016"].junio.totales],["Jul", 0],["Ago", 0],["Sep", 0],["Oct", 0],["Nov", 0],["Dic", 0]],
              color: "#3c8dbc"
            };
            $.plot("#bar-chart", [bar_data], {
              grid: {
                borderWidth: 1,
                borderColor: "#f3f3f3",
                tickColor: "#f3f3f3"
              },
              series: {
                bars: {
                  show: true,
                  barWidth: 0.5,
                  align: "center"
                }
              },
              xaxis: {
                mode: "categories",
                tickLength: 0
              }
            });
            /* END BAR CHART */

        }).
        error(function(data, status, headers, config){
            console.log("data:" +data.message);
        });

        $http({method: 'GET', url:'/queryNegativos'}).
        success(function(data, status, headers, config){
            $scope.negativos= data;
        }).
        error(function(data, status, headers, config){
        });

        $http({method: 'GET', url:'/queryPositivos'}).
        success(function(data, status, headers, config){
            $scope.positivos= data;
        }).
        error(function(data, status, headers, config){
            console.log("data:" +data.message);
        });

        $http({method: 'GET', url:'/queryNeutros'}).
        success(function(data, status, headers, config){
            $scope.neutrals= data;
        }).
        error(function(data, status, headers, config){
            console.log("data:" +data.message);
        });

    }
]);
