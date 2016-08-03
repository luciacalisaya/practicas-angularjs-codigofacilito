//Se está declarando el módulo
//"ngRoute" va a definir cómo responde la aplicación a diferentes URLs
angular.module("CustomDirective", ["ngRoute"]) 
.config(function($routeProvider){
	$routeProvider //nos permite definir las rutas
		.when("/", {
			controller: "ReposController",
			templateUrl: "templates/home.html"
		})
		.when("/repo/:name", {
			controller: "RepoController",
			templateUrl: "templates/repo.html"
		})
		.otherwise("/");
});
