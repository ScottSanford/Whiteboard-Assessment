angular.module("assessmentApp", [
        'ngRoute', 
        'ngAnimate', 
        'ui.bootstrap', 
        'ngMaterial', 
        'LocalStorageModule', 
        'ngMessages'
        ])

        .config(function ($routeProvider, $compileProvider) { 
              $compileProvider.imgSrcSanitizationWhitelist(/^(mfly:\/\/data\/entry|http:\/\/)/);  
              $routeProvider
                .when('/', {
                    templateUrl: 'intro/intro.html', 
                    controller: 'IntroCtrl'
                })
                .when('/questions', {
                    templateUrl: 'questions/questions.html',
                    controller: 'QuestionsCtrl'
                })  
                .when('/email-form', {
                    templateUrl: 'email-form/email-form.html', 
                    controller: 'EmailFormCtrl'
                })              
                .when('/results', {
                    templateUrl: 'results/results.html',
                    controller: 'ResultsCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
          })
        