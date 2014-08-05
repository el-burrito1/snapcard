'use strict';

angular.module('myApp.controllers' , []).
	controller('mainControl' , ['$scope' , '$http' , function($scope , $http){
		$scope.test = function(){
			alert('fuck yeah!')
		}

		$scope.invoicePrice = '00.00';
		$scope.personName = 'Bob';
		$scope.message = ''

		// $scope.pay = function(){
		// 	$http({method: 'POST' , url:'https://blockchain.info/api/receive?method=create&address=da95bc2c-f720-44ab-a1e6-24c0826d4fb7&callback=http://snapcardinvoice.herokuapp.com/#/thanks!'}).
		// 	success(function(data,status,headers,config){
		// 		console.log('success!')
		// 	}).
		// 	error(function(data,status,headers,config){
		// 		console.log('failure!')
		// 	})
		// }

		$scope.test = function(){
			var address = '1Lo7zhgddUWnDVTT4daLRzVztVtCFQ28Xr'
			var callBack = 'http://snapcardinvoice.herokuapp.com/#/thanks'
			$http({method:'GET' , url:'https://blockchain.info/api/receive?method=create&address=' + address + '&callback=' + callBack}).
			success(function(data,status,headers,config){
				console.log(data)
			}).
			error(function(data,status,headers,config){
				console.log(data)
			})
		}

		$scope.pay = function(){
			var url = 'https://blockchain.info/api/receive?method=create&cors=true&format=plain&address=1Lo7zhgddUWnDVTT4daLRzVztVtCFQ28Xr&shared=false&callback=http%3A%2F%2Fsnapcardinvoice.herokuapp.com%2F%23%2Fthanks';
			$http.jsonp(url)
				.success(function(data){
					console.log(data)
				})
				.error(function(data){
					console.log(data)
				})
		}

	}])