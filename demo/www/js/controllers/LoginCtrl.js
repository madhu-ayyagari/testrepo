'use strict';

(function(){

	var ctrlModule = angular.module('starter.controllers');

	var LoginController = function($scope,$timeout,$stateParams,$state,ionicMaterialInk,ngFB){
		$scope.$parent.clearFabs();
		$scope.fbLogin = function(){
			ngFB.login({scope:'public_profile,email,user_friends'})
				.then(function(response){
					if(response.status === "connected"){
						console.log(response);
						$state.go('app.profile');
					}
					else if(response.status === "not_authorized"){
						console.log('authorization failed');
						console.log(response);
					}
				},function(response){
					console.log('error occurred');
					console.log(response);
				});
		};
	    $timeout(function() {
	        $scope.$parent.hideHeader();
	    }, 0);
	    ionicMaterialInk.displayEffect();
	};

	ctrlModule.controller('LoginCtrl',['$scope','$timeout','$stateParams','$state','ionicMaterialInk','ngFB',LoginController]);

})();