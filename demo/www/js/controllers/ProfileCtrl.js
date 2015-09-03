'use strict';
(function(){

	var ctrlModule = angular.module('starter.controllers');

	var ProfileController = function($scope,$stateParams,$timeout,ionicMaterialMotion,ionicMaterialInk,ngFB){
		// Set Header
	    $scope.$parent.showHeader();
	    $scope.$parent.clearFabs();
	    $scope.isExpanded = false;
	    $scope.$parent.setExpanded(false);
	    $scope.$parent.setHeaderFab(false);
	    $scope.user = {};

	    ngFB.api({
	    	path:'/me',
	    	params:{fields:'email,name,id'}
	    }).then(function(user){
	    	$scope.user = user;
	    },function(response){
	    	console.log('Fetching user failed');
	    	console.log(response);
	    });

	    // Set Motion
	    $timeout(function() {
	        ionicMaterialMotion.slideUp({
	            selector: '.slide-up'
	        });
	    }, 300);

	    $timeout(function() {
	        ionicMaterialMotion.fadeSlideInRight({
	            startVelocity: 3000
	        });
	    }, 700);

	    // Set Ink
	    ionicMaterialInk.displayEffect();
	};

	ctrlModule.controller('ProfileCtrl',['$scope', '$stateParams', '$timeout', 'ionicMaterialMotion', 'ionicMaterialInk','ngFB',ProfileController]);
})();