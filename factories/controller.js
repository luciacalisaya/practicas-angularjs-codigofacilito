angular.module("ToDoList", ["LocalStorageModule"])

	/* En un Servicio se estructura un objeto con sus atributos más métodos y al final se lo retorna */
	/* Permitirá usar todas estas funcionalidades en distintos controladores */
	.factory("ToDoService", function(localStorageService){
		var toDoService = {};
		toDoService.key = "angular-todolist";

		/*Le definimos un función como si fuera un constructor para iniciar el arreglo activities*/
		if (localStorageService.get(toDoService.key)){
			toDoService.activities = localStorageService.get(toDoService.key); 	
		} else {
			toDoService.activities = [];
		}

		toDoService.add = function(newActv){
			toDoService.activities.push(newActv);
			toDoService.updaLocalStorage();
		};

		toDoService.updaLocalStorage = function(){
			localStorageService.set(toDoService.key, toDoService.activities);			
		};

		toDoService.clean = function(){
			toDoService.activities = [];	
			toDoService.updaLocalStorage();
			return toDoService.getAll();
		};

		toDoService.getAll = function(){
			return toDoService.activities;
		}

		toDoService.removeItem = function(item){
			toDoService.activities = toDoService.activities.filter(function(activity){
				return activity !== item;
			});
			toDoService.updaLocalStorage();
			return toDoService.getAll();
		}
		
		return toDoService;
	})


	.controller("ToDoController", function($scope, ToDoService){
		
		/*
			{
				descripcion: "Terminar el curso de Angular",
				fecha: "03-03-2015 5pm"
			}
		*/

		$scope.todo = ToDoService.getAll();

		$scope.addActv = function(){
			ToDoService.add($scope.newActv);
			$scope.newActv = {};
		};

		$scope.removeActv = function(item){
			$scope.todo = ToDoService.removeItem(item);
		};

		$scope.clean = function(){
			ToDoService.clean();
			$scope.todo = ToDoService.getAll();
		};

	});