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

	$scope.usuarios = {};
	$scope.get_users = function(){
		$http.post('api/v1/Users')
		.then(function(response){
			$scope.usuarios=response.data;
			console.log(200);
			console.log(response);
		}, function(response){
			console.log(500);
		});
  }
	$scope.getImages = function(){
		$http.post('api/v1/get_images')
		.then(function(response){
			console.log(200);
			console.log(response);
			$scope.images=response.data;
		}, function(){
			console.log(500);
		});
	}
	$scope.selected_user = [];

    $scope.query = {
      'filter': '',
      'order': 'id',
      'limit': 5,
      'page': 1
    }

    $scope.show_filters = false;

    $scope.view_columns = {
      "id": true,
      "nombre": true,
      "ap_paterno": true,
      "ap_materno": true
    }

    $scope.used_filters = {
      'status' : 1
    }
}]);
