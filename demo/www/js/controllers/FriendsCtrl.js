'use strict';

(function(){

	var ctrlModule = angular.module('starter.controllers');

	var FriendsController = function($scope,$stateParams,$timeout,ionicMaterialInk,ionicMaterialMotion){
		// Set Header
	    $scope.$parent.showHeader();
	    $scope.$parent.clearFabs();
	    $scope.$parent.setHeaderFab('left');

	    // Delay expansion
	    $timeout(function() {
	        $scope.isExpanded = true;
	        $scope.$parent.setExpanded(true);
	    }, 300);

	    // Set Motion
	    ionicMaterialMotion.fadeSlideInRight();

	    // Set Ink
	    ionicMaterialInk.displayEffect();
	};

	ctrlModule.controller('FriendsCtrl',['$scope', '$stateParams', '$timeout', 'ionicMaterialInk', 'ionicMaterialMotion',FriendsController]);

})();