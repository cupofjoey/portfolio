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
        })

        .when('/twitch', {
            templateUrl : 'twitch/twitch.html',
            controller  : 'twitchCtrl'
            // css: 'twitch/twitch.css'
        })

        .when('/calculator', {
            templateUrl : 'calculator/calc.html',
            controller  : 'calculatorCtrl'
        })    

        .when('/shortener', {
            templateUrl : 'shortener/shortener.html',
            controller  : 'shortenerCtrl',
            css: 'shortener/shortener.css'     

        });
});




app.controller("mainCtrl", function($scope){
	$scope.message = "Hello Main";

});

app.controller("aboutCtrl", function($scope){
	$scope.message = "Hello About";

});

//Source: http://stackoverflow.com/questions/15193492/how-to-include-view-partial-specific-styling-in-angularjs
app.directive('head', ['$rootScope','$compile',
    function($rootScope, $compile){
        return {
            restrict: 'E',
            link: function(scope, elem){
                var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                elem.append($compile(html)(scope));
                scope.routeStyles = {};
                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                    if(current && current.$$route && current.$$route.css){
                        if(!angular.isArray(current.$$route.css)){
                            current.$$route.css = [current.$$route.css];
                        }
                        angular.forEach(current.$$route.css, function(sheet){
                            delete scope.routeStyles[sheet];
                        });
                    }
                    if(next && next.$$route && next.$$route.css){
                        if(!angular.isArray(next.$$route.css)){
                            next.$$route.css = [next.$$route.css];
                        }
                        angular.forEach(next.$$route.css, function(sheet){
                            scope.routeStyles[sheet] = sheet;
                        });
                    }
                });
            }
        };
    }
]);


