myApp.controller('headerCtrl', ['$scope', '$http', '$state', function($scope, $http, $state){
  $scope.cabecera = '*************************************************';
  $scope.datos = [];
  $http.post('api/v1/login')
  .then(function(response){
    $scope.datos = response;
    console.log($scope.datos);
  }, function(response){
    console.log(500);
  });
}]);
