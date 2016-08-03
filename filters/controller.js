angular.module("mainModule", [])
	.filter("removeHtml", function(){
		return function(texto){
			/* return texto.toUpperCase(); */
			/*Obtiene las etiquetas y las reemplaza por el 2do. parámetro*/
			return String(texto).replace(/<[^>]+>/gm, ''); 
		}	
	})
	.controller("FiltersController", function($scope){
		/*$scope.mi_html = "<p>Hola Mundo</p>"*/
		$scope.mi_html = {};
		$scope.mi_html.title = "Hola";
		$scope.mi_html.body = "Hola mundo";
		$scope.costo = 2.5;
	});