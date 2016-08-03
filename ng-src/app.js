angular.module("CustomDirective", [])
.directive('backImg', function(){
	// Forma de crear directivas
	// scope: para que la directiva pueda acceder a las variables del controlador
	// element: el elemento que tiene la directiva
	// attrs: los atributos del elemento que se transforman en un hash
	return function(scope, element, attrs){
		attrs.$observe('backImg', function(url){
			element.css({
				'background': "url("+url+")",
				'background-position': 'center',
				'background-size': 'cover'
			});
		});
	};
})

// Un $observe es un método que recibe un atributo y ejecuta la directiva

/*
style="background: url({{ repo.owner.avatar_url }}); 
			background-position: center; 
			background-size: cover;"
*/
.controller("AppCtrl", function($scope, $http){
	$http.get("https://api.github.com/users/lcalisaya/repos")	
	.success(function(data){
		$scope.repos = data; 
	})
	.error(function(err){
		console.log(err);
	})
});