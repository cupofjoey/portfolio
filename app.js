var app = angular.module("portfolioApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/main.html',
            controller  : 'mainCtrl'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutCtrl'
        });
});





app.controller("mainCtrl", function($scope){
	$scope.message = "Hello Main";

});

app.controller("aboutCtrl", function($scope){
	$scope.message = "Hello About";

});