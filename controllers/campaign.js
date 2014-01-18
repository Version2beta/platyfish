app.controller('CampaignController', function ($scope, $http, $rootScope) {

  $rootScope.controller = "campaign";
  console.log("CampaignController");

  $scope.createCampaign = function () {
    apitoken = window.sessionStorage.token;
    var jsonCreateData = JSON.stringify({
      "CampaignName": this.campaignName,
      "DiscoveryAllowed": this.discoveryAllowed,
      "SearchAllowed": this.searchAllowed,
      "Description": this.description,
      "MoneyGoal": this.moneyGoal,
      "ItemsGoal": this.itemsGoal,
      "ItemNameSingle": this.itemNameSingle
    });
    $http.post(config.api + '/project/?apikey=' + apitoken, jsonCreateData)
    .success(function (data, status, headers, config) {
      alert(data);
    })
    .error(function (data, status, headers, config) {
      alert(data, status, headers, config);
    });
  }

  $scope.getCampaigns = function () {
  }

  $scope.getTopCampaigns = function () {
    var _this = this;
    apitoken = window.sessionStorage.token;
    $http.get(config.api + '/project/' + id + "?apikey=" + apitoken)
    .success(function (data, status, headers, config) {
      $scope.projects = data;
      $scope.projects.ShortIntro = data.Introduction.replace(/^([^ ]+ ){100}/, '...');
    })
    .error(function (data, status, headers, config) {
       console.log("CampaignController.getTopCampaigns", data, status, headers, config);
    });
  }

  $scope.getCampaign = function (id) {
    var _this = this;
    apitoken = window.sessionStorage.token;
    $http.get(config.api + '/project/' + id + "?apikey=" + apitoken)
    .success(function (data, status, headers, config) {
      alert(data);
    })
    .error(function (data, status, headers, config) {
       alert(data, status, headers, config);
    });
  }

  $scope.updateCampaign = function (data) {
    var _this = this;
    var jsonUpdateData = JSON.stringify({
      "CampaignName": data.CampaignName,
      "DiscoveryAllowed": data.DiscoveryAllowed,
      "SearchAllowed": data.SearchAllowed,
      "Description": data.Description,
      "MoneyGoal": data.MoneyGoal,
      "ItemsGoal": data.ItemsGoal,
      "ItemNameSingle": data.ItemNameSingle,
      "Id": data.Id
    });
    $http.put(config.api + '/project/' + data.Id + '?apikey=' + apitoken, jsonUpdateData)
    .success(function (data, status, headers, config) {
      alert(data);
    })
    .error(function (data, status, headers, config) {
      alert(data, status, headers, config);
    });
  }

  $scope.deleteCampaign = function (id) {
    var _this = this;
    $http.delete(config.api + '/project/' + id + '?apikey=' + apitoken)
    .success(function (data, status, headers, config) {
      alert(data);
    })
    .error(function (data, status, headers, config) {
      alert(data, status, headers, config);
    });
  }

});
