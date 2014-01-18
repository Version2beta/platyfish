var app = angular.module('app', ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when(
    '/',
    {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });
  $routeProvider.when(
    '/campaigns',
    {
      templateUrl: 'views/campaign.html',
      controller: 'CampaignController'
    });
  $locationProvider.html5Mode(true);
});
