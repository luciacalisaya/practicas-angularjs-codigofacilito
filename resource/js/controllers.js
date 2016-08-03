angular.module("FinalApp")
	.controller("MainController", function($scope, $resource, PostResource){
		// 1º: Configurar el resource
		// Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"})

		// 2º: Se obtienen los posts
		$scope.posts = PostResource.query();
		// query() -> GET /posts -> Un arreglo de posts

		// 3º: Se configura el resource y se obtienen los usuarios
		User = $resource("http://jsonplaceholder.typicode.com/users/:id", {id: "@id"})
		$scope.users = User.query();

		$scope.removePost = function(post){
			PostResource.delete({id: post.id}, function(data){
				console.log(data);
			});
			$scope.posts = $scope.posts.filter(function(element){
				return element.id !== post.id;
			});
		}
	})

	.controller("PostController", function($scope, PostResource, $location, $routeParams){
		$scope.title = "Editar Post"; 
		$scope.post = PostResource.get({id: $routeParams.id}); //Es un objeto JSON - isArray => false 
		$scope.savePost = function(){
			PostResource.update({id: $scope.post.id}, {data: $scope.post}, function(data){
				console.log(data);
				$location.path("/"+$scope.post.id);
			});
		}
	})

	.controller("NewPostController", function($scope, PostResource, $location){
		$scope.post = {};
		$scope.title = "Crear Post";
		$scope.savePost = function(){
			PostResource.save({data: $scope.post}, function(data){
				console.log(data);
				$location.path("/");
			});
		}
	});