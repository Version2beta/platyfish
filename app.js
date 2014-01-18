var app = angular.module('app', ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider.when(
    '/',
    {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    });
});

app.controller('MainCtrl', ['$scope', function ($scope) { console.log("MainCtrl"); }]);
