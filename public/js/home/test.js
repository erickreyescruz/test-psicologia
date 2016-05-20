myApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

  $stateProvider
	.state('inicio.test', {
		url: 'test',
		views: {
			'content': {
        'controller': 'testCtrl',
				'templateUrl': 'templates/test.html'
			}
		}
	});
});

myApp.controller('testCtrl', ['$scope', '$http', '$state', '$timeout', '$stateParams', function($scope, $http, $state, $timeout, $stateParams){

var counter=0;

$scope.stop=false;

	for(var i=0;i<10;i++){

	$timeout(function(){
		if($scope.stop==false){
		$http.post('api/v1/images')
	  .then(function(response){
	    console.log(200);
	    console.log(response.data[0].id);
	    $scope.image = response.data[0];
			counter++;
			console.log(counter);
	  }, function(response){
	    console.log(500);
	  });
		}
	}, i*5000);
	$state.go($state.current);
}
$scope.stopTest=function(){
	$scope.stop=true;
	$state.go('^');
}
}]);
