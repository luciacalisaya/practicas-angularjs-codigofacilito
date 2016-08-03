angular.module("CustomDirective") //Se está llamando al módulo

.controller("ReposController", function($scope, $http){
	$scope.repos = [];
	$http.get("https://api.github.com/users/twitter/repos")
		.success(function(data){
			$scope.posts = data;
			for (var i = data.length - 1; i >= 0; i--) {
				var repo = data[i];
				$scope.repos.push(repo.name);
			};
		})

		.error(function(err){

		});	

// Se filtra el repo que acaba de ser seleccionado	
		$scope.optionSelected = function(data){
			$scope.$apply(function(){
				$scope.main_repo = data	
			})
		}
})

.controller("RepoController", function($scope, $http, $routeParams){
	$scope.repo = {};
		$http.get("https://api.github.com/repos/twitter/"+$routeParams.name)
		.success(function(data){
			$scope.repo = data;
		})

		.error(function(err){

		});	

});