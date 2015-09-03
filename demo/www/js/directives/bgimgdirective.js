'use strict';
(function(){

	var dirModule = angular.module('starter.directives',[]);

	var bgImgDirective = function(){
		return{
			restrict:'A',
			scope:{
				graphid:"@"
			},
			link:function(scope,el,attrs){
				attrs.$observe('graphid',function(newVal){
					var imgUrl = 'url(http://graph.facebook.com/'+newVal+'/picture)';
					el.css('background-image',imgUrl);					
				});				
			}
		}
	}

	dirModule.directive('bgFbImage',[bgImgDirective]);

})();