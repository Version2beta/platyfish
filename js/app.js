var app = angular.module('app', ["ngRoute"]);
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when(
    '/campaigns',
    {
      redirectTo: '/'
  }).when(
    '/campaigns/:campaign',
    {
      templateUrl: '/views/campaign.html',
      controller: 'CampaignController'
  }).when(
    '/404',
    {
      templateUrl: '/views/404.html'
  }).when(
    '/',
    {
      templateUrl: '/views/home.html',
      controller: 'HomeController'
  }).otherwise({
    redirectTo: '/404'
  });
  $locationProvider.html5Mode(true);
});
