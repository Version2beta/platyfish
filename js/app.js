var config = {
  api: "//192.168.19.133/PafAPI/",
  key: "597C81DE-4E50-475F-B26C-6857BA068175"
}

var app = angular.module('app', ["ngRoute", "ngResource"]);
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
    '/teaching',
    {
      templateUrl: '/views/teaching.html'
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

var ProjectsApi = function($resource) {
  this.top = $resource(config.api + '/projects/top', { apikey: config.key });
}
app.service("Projects", ProjectsApi);
