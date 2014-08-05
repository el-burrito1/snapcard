'use strict';

angular.module('myApp.controllers' , []).
	controller('mainControl' , ['$scope' , '$http' , function($scope , $http){
		$scope.test = function(){
			alert('fuck yeah!')
		}

		$scope.invoicePrice = '00.00';
		$scope.personName = 'Bob';
		$scope.message = ''

		$scope.pay = function(){
			$http({method: 'POST' , url:'https://blockchain.info/api/receive?method=create&address=da95bc2c-f720-44ab-a1e6-24c0826d4fb7&callback=http://snapcardinvoice.herokuapp.com/#/thanks!'}).
			success(function(data,status,headers,config){
				console.log('success!')
			}).
			error(function(data,status,headers,config){
				console.log('failure!')
			})
		}

	}])