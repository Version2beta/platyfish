var app = angular.module('app', ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when(
        '/',
        {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        });
});

app.controller('MainCtrl', ['$scope', function ($scope) { debugger; }]);
