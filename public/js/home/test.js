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
for(var i=0;i<10;i++){
$timeout(function(){
  var random = Math.floor(Math.random()*8)+1;
	console.log(random);
	$http.post('api/v1/images/'+random)
  .then(function(response){
    console.log(200);
    console.log(response);
    $scope.image = response.data[0];
		counter++;
		console.log(counter);
  }, function(response){
    console.log(500);
  });
}, i*5000);
$state.go($state.current);
}
}]);
