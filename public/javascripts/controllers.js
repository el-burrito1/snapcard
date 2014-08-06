'use strict';

angular.module('myApp.controllers' , []).
	controller('mainControl' , ['$scope' , '$http' , function($scope , $http){

		$scope.amount = '0';

		// $http({
		// 	method:'GET' , 
		// 	url: 'https://coinbase.com/api/v1/currencies/exchange_rates'
		// }).
		// success(function(data,status,headers,config){
		// 	console.log('success')
		// }).
		// error(function(data,status,headers,config){
		// 	console.log('failure')
		// })

		$http.jsonp('https://coinbase.com/api/v1/currencies/exchange_rates').
		success(function(data,status,headers,config){
			console.log('success');
		}).
		error(function(data,status,headers,config){
			console.log('failure')
		})

		window.scope = $scope;

		$scope.getAddress = function(){
			var address = '1Lo7zhgddUWnDVTT4daLRzVztVtCFQ28Xr'
			var callBack = 'http://snapcardinvoice.herokuapp.com/#/thanks'
			$http({method:'GET' , url:'https://blockchain.info/api/receive?method=create&address=' + address + '&callback=' + callBack}).
			success(function(data,status,headers,config){
				console.log(data)
				$scope.token = data.input_address;
			}).
			error(function(data,status,headers,config){
				console.log(data)
			})

		}

		$scope.displayNone = function(){
			$('.priceForm').addClass('displayNone');
		}

	}])