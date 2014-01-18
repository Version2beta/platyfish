app.controller('HomeController', function ($scope, $http, $rootScope, Projects) {
  console.log("Home controller");
  $rootScope.controller = "home";
  $scope.projects = Projects.top.query();
  console.log($scope.projects);

});
