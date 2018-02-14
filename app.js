(function(){

    var app = angular.module('juApp',['ui.router', 'ui.bootstrap', 'ngSanitize', 'ui.select']);
    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl : "./Templates/home.html",
                controller: 'homeCtrl'
            })

            .state('main', {
                url: '/main',
                templateUrl : "./Templates/main.html",
                controller: 'mainCtrl'
            })
    });
}());
