'use strict';

angular.module('myApp.controllers' , []).
	controller('mainControl' , ['$scope' , function($scope){
		$scope.test = function(){
			alert('fuck yeah!')
		}
	}])