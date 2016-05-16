myApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

  $stateProvider
	.state('inicio.admin', {
		url: 'admin',
		views: {
			'content': {
        'controller': 'adminCtrl',
				'templateUrl': 'templates/admin.html'
			}
		}
	});
});
myApp.controller('adminCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  $scope.get_users = function(){

  }
}]);
