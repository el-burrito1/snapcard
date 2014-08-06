'use strict'

angular.module('myApp.services' , []).
	factory('exchangeRate' , ['$http' , function($http){
		var btcRate;
		$http({
			method:'GET' , 
			url: 'https://jsonp.nodejitsu.com/?url=https%3A%2F%2Fcoinbase.com%2Fapi%2Fv1%2Fcurrencies%2Fexchange_rates'
		}).
		success(function(data,status,headers,config){
			btcRate = parseFloat(data.btc_to_usd);
		}).
		error(function(data,status,headers,config){
			console.log('failure')
		});
	}])