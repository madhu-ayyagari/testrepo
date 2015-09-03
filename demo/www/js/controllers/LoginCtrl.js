'use strict';

(function(){

	var ctrlModule = angular.module('starter.controllers');

	var LoginController = function($scope,$timeout,$stateParams,ionicMaterialInk){
		$scope.$parent.clearFabs();
	    $timeout(function() {
	        $scope.$parent.hideHeader();
	    }, 0);
	    ionicMaterialInk.displayEffect();
	};

	ctrlModule.controller('LoginCtrl',['$scope','$timeout','$stateParams','ionicMaterialInk',LoginController]);

})();