angular.module("assessmentApp", [
        'ngRoute', 
        'ngAnimate', 
        'ui.bootstrap', 
        'ngMaterial', 
        'LocalStorageModule'
        ])

        .config(function ($routeProvider, $compileProvider) { 
              $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:\/\/data\/entry|http:\/\/)/);  
              $routeProvider
                .when('/', {
                    templateUrl: 'intro/intro.html', 
                    controller: 'IntroCtrl'
                })
                .when('/middle', {
                    templateUrl: 'middle/middle.html',
                    controller: 'MiddleCtrl'
                })                
                .when('/end', {
                    templateUrl: 'end/end.html',
                    controller: 'EndCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
          })
        