var app = angular.module("MyFirstApp", []); //retorna una referencia a la app

app.controller("FirstController", function($scope){
	$scope.nombre = "Uriel";
});