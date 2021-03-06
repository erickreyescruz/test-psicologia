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

		$scope.usuarios = [];
		$scope.show_UserTest = false;
		$scope.selected_user = [];
		$scope.admins = [];
		$scope.images = [];
		$scope.categories	= [];
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

		$scope.get_admins = function(){
			$http.post('api/v1/Admins')
			.then(function(response){
				$scope.admins=response.data;
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
       $scope.getImagesInCategory = function(name){
               $http.post('api/v1/getImagesInCategory',{'nombre': name})
               .then(function(response){
                       console.log(200);
                       console.log(response);
                       //alert(JSON.stringify(response.data));
                       $scope.images=response.data.row;
               }, function(){
                       console.log(500);
               });
       }

       $scope.getCategories = function(){
               $http.post('api/v1/categories')
               .then(function(response){
                       console.log(200);
                       console.log(response);
                       $scope.categories=response.data;
               }, function(){
                       console.log(500);
               });
       }

       $scope.new_category = function(new_category){
               $scope.new_category = new_category;
               $http.post('api/v1/categories/new',{'name': $scope.new_category})
               .then(function(response){
                       alert('Categoría insertada correctamente');
                       console.log(200);
                       console.log(response);
											 $state.go($state.current, {}, {reload:true});
               }, function(){
                       console.log(500);
               });
       }
			 $scope.admin={
				 'usuario':'',
				 'nombre':'',
				 'ap_paterno':'',
				 'ap_materno':'',
				 'edad':'',
				 'pass':'',
				 'pass_r':''
			 }
       $scope.new_admin = function(){
               if ($scope.admin.pass == $scope.admin.pass_r) {
                       $http.post('api/v1/admin/new',$scope.admin)
                       .then(function(response){
                                       alert('Admin agragado correctamente');
                                       console.log(200);
                                       console.log(response);
																			 $state.go($state.current, {}, {reload:true});
                       }, function(){
                               console.log(500);
                       });
               }else {
                       alert('Las contraseñas no coinciden');
               }
       }
			 $scope.usuario = {
				 'usuario':'',
				 'nombre':'',
				 'ap_paterno':'',
				 'ap_materno':'',
				 'edad':'',
				 'pass':'',
				 'pass_r':''
			 }
       $scope.new_user = function(){
               if ($scope.usuario.pass == $scope.usuario.pass_r) {
                       $http.post('api/v1/user/new',$scope.usuario)
                       .then(function(response){
                                       alert('Usuario agragado correctamente');
                                       console.log(200);
                                       console.log(response);
																			 $state.go($state.current, {}, {reload:true});
                       }, function(){
                               console.log(500);
                       });
               }else {
                       alert('Las contraseñas no coinciden');
               }
       }

       $scope.change_pass = function(d_pass_b,d_pass,d_pass_r){
               if (d_pass == d_pass_r) {
                       $http.post('api/v1/admin/change_pass',{'d_pass_b': d_pass_b, 'd_pass': d_pass, 'd_pass_r': d_pass_r })
                       .then(function(response){
                               if (response.data.msg == 'dif') {
                                       alert('Coloca tu contraseña actual');
                               }else {
                                       alert('Contraseña actualizada');
                               }
                       }, function(){
                               console.log(500);
                       });
               }else {
                       alert('Las contraseñas que quieres cambiar no coinciden');
               }
       }
			 $scope.formStatus=false;
			 $scope.showForm=function(){
				 $scope.formStatus = !$scope.formStatus;
			 }
			 $scope.closeForm=function(){
				 $scope.formStatus=false;
			 }
			 $scope.formAdminStatus=false;
			 $scope.showAdminForm=function(){
				 $scope.formAdminStatus=!$scope.formAdminStatus;
			 }
			 $scope.closeAdminForm=function(){
				 $scope.formAdminStatus=false;
			 }
 }]);
