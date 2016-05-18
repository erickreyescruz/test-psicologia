myApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

  $stateProvider
	.state('inicio.home', {
		url: 'home',
		views: {
			'content': {
        'controller': 'homeCtrl',
				'templateUrl': 'templates/home.html'
			}
		}
	});
});

myApp.controller('homeCtrl', ['$scope', '$http', '$state', '$timeout', function($scope, $http, $state, $timeout){

}]);
