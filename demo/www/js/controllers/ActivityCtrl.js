'use script';

(function(){

	var ctrlModule = angular.module('starter.controllers');

	var ActivityController = function($scope,$stateParams,$timeout,ionicMaterialInk,ionicMaterialMotion){
		$scope.$parent.showHeader();
	    $scope.$parent.clearFabs();
	    $scope.isExpanded = true;
	    $scope.$parent.setExpanded(true);
	    $scope.$parent.setHeaderFab('right');

	    $timeout(function() {
	        ionicMaterialMotion.fadeSlideIn({
	            selector: '.animate-fade-slide-in .item'
	        });
	    }, 200);

	    // Activate ink for controller
	    ionicMaterialInk.displayEffect();
	}

	ctrlModule.controller('ActivityCtrl',['$scope','$stateParams','$timeout','ionicMaterialInk','ionicMaterialMotion',ActivityController]);
})();