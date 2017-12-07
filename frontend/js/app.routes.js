(function(){
	angular
	.module('app')
	.config(['$routeProvider', function($routeProvider){

		$routeProvider

		.when('/',{
			templateUrl: 'templates/home.html',
			controller: 'homeController',
			controllerAs: 'homeCtrl'
		})

		.when('/edit',{
			templateUrl: 'templates/edit.html',
			controller: 'homeController',
			controllerAs: 'homeCtrl'
		})

		.when('/create',{
			templateUrl: 'templates/create.html',
			controller: 'createController',
			controllerAs: 'createCtrl'
		});
	}]);
})();