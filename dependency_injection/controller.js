var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope", function(az){
	az.name = "Uriel";
	az.newComment = {username: "ejemplo nombre"};
	az.commentaries = [
		{
			comment: "Muy buen tutorial",
			username: "CodigoFacilito"
		},
		{
			comment: "Malísimo el tutorial",
			username: "otro_usuario"
		}
	];

	az.addComment = function(){
		az.commentaries.push(az.newComment);
		az.newComment = {};
	};
}]);