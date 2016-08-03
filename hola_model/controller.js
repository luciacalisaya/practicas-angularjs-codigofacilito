var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function($scope){
	$scope.name = "Uriel";
	$scope.newComment = {username: "un nombre"};
	$scope.commentaries = [
		{
			comment: "Muy buen tutorial",
			username: "CodigoFacilito"
		},
		{
			comment: "Malísimo el tutorial",
			username: "otro_usuario"
		}
	];

	$scope.addComment = function(){
		$scope.commentaries.push($scope.newComment);
		$scope.newComment = {};
	};
});