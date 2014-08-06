'use strict'

var app = angular.module('myApp' , ['ngRoute' , 'myApp.controllers' , 'monospaced.qrcode']);

app.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.config(['$routeProvider' , function ($routeProvider){
	$routeProvider.when('/' , {
		templateUrl: 'partials/index',
		controller: 'mainControl'
	}).when('/thanks' , {
		templateUrl: 'partials/thanks',
		controller: 'mainControl'
	}).when('/markup' , {
		templateUrl: 'partials/markup',
		controller: 'mainControl'
	})
	.otherwise({redirectTo: '/'})
}]);
