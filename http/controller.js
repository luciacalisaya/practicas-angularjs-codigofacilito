var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function($scope, $http){
	$scope.posts = [];
	$scope.users = [];
	$scope.newPost = {};

	$http.get("http://jsonplaceholder.typicode.com/posts")
	.success(function(data){
		console.log(data);
		$scope.posts = data;	
	})
	.error(function(err){

	});

	$http.get("http://jsonplaceholder.typicode.com/users")
	.success(function(data){
		$scope.users = data
	})
	.error(function(err){

	});

	$scope.addPost = function(){
		$http.post("http://jsonplaceholder.typicode.com/posts", {
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
			.success(function(data, status, headers, config){
				console.log(data);
				$scope.posts.push($scope.newPost);
				$scope.newPost = {};
			})
			.error(function(err, status, headers, config){

			});		
	};
});
