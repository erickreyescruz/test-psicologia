myApp.controller('headerCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  $scope.cabecera = '*************************************************';
  $scope.datos = {
    'usuario':'',
    'password':''
  }
  $scope.login = function(){
    $http.post('api/v1/login', $scope.datos)
    .then(function(response){
      console.log(200);
      console.log(response);
    }, function(response){
      console.log(500);
    });
  }
}]);
