angular.module("MyFirstApp", [])
	.run(function($rootScope){
		$rootScope.nombre = "Código Facilito";
	})
	.controller("FirstController", function($scope){
		$scope.nombre = "CF";
		setTimeout(function(){
			$scope.$apply(function(){
				$scope.nombre = ":)";
			});
		}, 3000)
	})
	.controller("SecondController", function($scope){

	});