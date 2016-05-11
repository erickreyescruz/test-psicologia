myApp.controller('headerCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  $scope.datos = {
    'usuario':'',
    'password':''
  }
  $scope.status = false;
  $scope.login = function(){
    if($scope.datos.usuario!=''&&$scope.datos.password!=''){
      $http.post('api/v1/login', $scope.datos)
      .then(function(response){
        if(response.data.code==200){
          console.log(200);
          console.log(response.data);
          $scope.status = true;
          $state.go('inicio.home');
        }else{
          console.log(404);
          alert('No se encontro usuario');
        }
      }, function(response){
        console.log(500);
      });
    }else{
      alert('Introduce tus datos');
    }

  }
  $scope.logout = function(){
    $http.post('api/v1/logout')
    .then(function(response){
      console.log(200);
      console.log(response);
      $scope.datos = {
        'usuario':'',
        'password':''
      }
      $scope.status = false;
      $state.go('inicio');
    }, function(response){
      console.log(500);
    });
  }
}]);
