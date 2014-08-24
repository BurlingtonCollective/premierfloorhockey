var app = angular.module('leagueApp', ['ngRoute', 'firebase', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []),
		services = angular.module('app.services', []);
		directives = angular.module('app.directives', []);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/layout/home.html',
			controller: 'HomeCtrl',
			pageTitle: 'Home'
		});
}])