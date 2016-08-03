angular.module("CustomDirective", [])
//Las directivas sirven para hacer modificaciones al DOM/página (a través de link)
//Con jQueryUI se puede hacer auto completado de texto

.directive("myAutocomplete", function(){
	function link(scope, element, attrs){
		$(element).autocomplete({
			//source: scope[attrs.myAutocomplete],
			source: scope.$eval(attrs.myAutocomplete),
			select: function(ev, ui){
				ev.preventDefault();
				if (ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			focus: function(ev, ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return{
		link: link
	};
})

.directive('backImg', function(){
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

.controller("AppCtrl", function($scope, $http){
	$scope.repos = [];
	$http.get("https://api.github.com/users/twitter/repos")
		.success(function(data){
			$scope.posts = data;
			for (var i = data.length - 1; i >= 0; i--) {
				var repo = data[i];
				$scope.repos.push(repo.name);
			};
		})

		.error(function(err){

		});	

// Se filtra el repo que acaba de ser seleccionado	
		$scope.optionSelected = function(data){
			$scope.$apply(function(){
				$scope.main_repo = data	
			})
		}
});
