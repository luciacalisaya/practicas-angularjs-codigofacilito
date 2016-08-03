angular.module("ToDoList", ["LocalStorageModule"])

	/* Factory retorna una función normal*/
	/* Service es como un constructor */

/*
	function toDoService(localStorageService){};
		toDoService();      // Un factory
		new toDoService();  // Un service
*/
	.service("ToDoService", function(localStorageService){
		
		this.key = "angular-todolist";

		if (localStorageService.get(this.key)){
			this.activities = localStorageService.get(this.key); 	
		} else {
			this.activities = [];
		}

		this.add = function(newActv){
			this.activities.push(newActv);
			this.updaLocalStorage();
		};

		this.updaLocalStorage = function(){
			localStorageService.set(this.key, this.activities);			
		};

		this.clean = function(){
			this.activities = [];	
			this.updaLocalStorage();
			return this.getAll();
		};

		this.getAll = function(){
			return this.activities;
		}

		this.removeItem = function(item){
			this.activities = this.activities.filter(function(activity){
				return activity !== item;
			});
			this.updaLocalStorage();
			return this.getAll();
		}
		
		return this;
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