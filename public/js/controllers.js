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
        success(function(data, status, headers, config){
            console.log(data);
            var totales = data["2016"].totales;
            var positivos = data["2016"].positivos;
            var negativos = data["2016"].negativos;
            var neutros = data["2016"].neutros;
            loadLiquidFillGauge("fillgauge1", (positivos * 100)/totales);
            var config1 = liquidFillGaugeDefaultSettings();
            config1.circleColor = "#FF7777";
            config1.textColor = "#FF4444";
            config1.waveTextColor = "#FFAAAA";
            config1.waveColor = "#FFDDDD";
            config1.circleThickness = 0.2;
            config1.textVertPosition = 0.2;
            config1.waveAnimateTime = 1000;

            loadLiquidFillGauge("fillgauge2", (negativos * 100)/totales, config1);
            var config2 = liquidFillGaugeDefaultSettings();
            config2.circleColor = "#D4AB6A";
            config2.textColor = "#553300";
            config2.waveTextColor = "#805615";
            config2.waveColor = "#AA7D39";
            config2.circleThickness = 0.1;
            config2.circleFillGap = 0.2;
            config2.textVertPosition = 0.8;
            config2.waveAnimateTime = 2000;
            config2.waveHeight = 0.3;
            config2.waveCount = 1;

            loadLiquidFillGauge("fillgauge3", (neutros * 100)/totales, config2);
            var config3 = liquidFillGaugeDefaultSettings();
            config3.textVertPosition = 0.8;
            config3.waveAnimateTime = 5000;
            config3.waveHeight = 0.15;
            config3.waveAnimate = false;
            config3.waveOffset = 0.25;
            config3.valueCountUp = false;
            config3.displayPercent = false;

            var freqData=[
                {State:'May',freq:{Negativos:data["2016"].mayo.negativos, Neutrales:data["2016"].mayo.neutros, Positivos:data["2016"].mayo.positivos}}
                ,{State:'Jun',freq:{Negativos:data["2016"].junio.negativos, Neutrales:data["2016"].junio.neutros, Positivos:data["2016"].junio.positivos}}
                //,{State:'Mar',freq:{Negativos:3, Neutrales:4, Positivos:5}}
                //,{State:'Jul',freq:{Negativos:0, Neutrales:0, Positivos:0}}
                //,{State:'Ago',freq:{Negativos:0, Neutrales:0, Positivos:0}}
                //,{State:'Sep',freq:{Negativos:0, Neutrales:0, Positivos:0}}
                //,{State:'Oct',freq:{Negativos:0, Neutrales:0, Positivos:0}}
                //,{State:'Nov',freq:{Negativos:0, Neutrales:0, Positivos:0}}
                //,{State:'Dic',freq:{Negativos:0, Neutrales:0, Positivos:0}}
            ];
            dashboard('#dashboard',freqData);
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
