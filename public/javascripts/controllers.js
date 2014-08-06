'use strict';

angular.module('myApp.controllers' , []).
	controller('mainControl' , ['$scope' , '$http' , '$timeout' , function($scope , $http , $timeout){

		window.scope = $scope;
		$scope.expired = false;
		$scope.partial = false;
		$scope.full = false;

		$scope.btc = 0;
		$scope.invoiceAmount = 10;


		$http.get('https://jsonp.nodejitsu.com/?url=https%3A%2F%2Fcoinbase.com%2Fapi%2Fv1%2Fcurrencies%2Fexchange_rates').
		  then(function(response,status,headers,config){        
		  	$scope.exchangeRate = (parseFloat(response.data.btc_to_usd)).toFixed(2);
		  },
		  function(data,status,headers,config){
		      console.log('error');
		  });

		$scope.getAddress = function(){
			var address = '1Lo7zhgddUWnDVTT4daLRzVztVtCFQ28Xr'
			var callBack = 'http://snapcardinvoice.herokuapp.com/#/thanks'
			$http({method:'GET' , url:'https://blockchain.info/api/receive?method=create&address=' + address + '&callback=' + callBack}).
			success(function(data,status,headers,config){
				console.log('success')
				$scope.token = data.input_address;
			}).
			error(function(data,status,headers,config){
				console.log('error')
			})

		};

		$scope.showQR = function(){
			$('.qr').addClass('show');
			if($scope.btc < 10){
				$scope.partial = true;
			} else {
				$scope.full = true;
			}
		};

		var expire = function(){
			$timeout(function(){
				if($scope.partial == false && scope.full == false){
					$scope.expired = true;
				} else {
					$scope.expired = false;
				}

			},30000)
		};

		expire();


	}])