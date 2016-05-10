var myApp = angular.module('App', ['ui.router', 'ngMaterial', 'ngMdIcons', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

  $stateProvider
	.state('inicio', {
		url: '/',
		views: {
			'header': {
        'controller': 'headerCtrl',
				'templateUrl': 'templates/header.html'
			},
			'content': {
				'templateUrl': 'templates/content.html'
			}
		}
	});
});

myApp.controller('LoginController', ['$scope', '$http', '$state', function($scope, $http, $state){
  
}]);
