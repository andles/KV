var app = angular.module('kv', ['ngRoute', 'uiGmapgoogle-maps']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'mainCtrl'
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.when('/news', {
		templateUrl: 'views/news.html'
	})
	.when('/commercial', {
		templateUrl: 'views/commercial.html'
	})
	.when('/street', {
		templateUrl: 'views/street.html'
	})
	.when('/solar', {
		templateUrl: 'views/solar.html'
	})
	.when('/service', {
		templateUrl: 'views/service.html'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html'
	})
	.otherwise({
  	redirectTo: '/'
  })
});

