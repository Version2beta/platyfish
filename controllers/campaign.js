app.controller('CampaignCtrl', function ($scope, $http) {
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
        $http.post('//192.168.19.133/PafAPI/project/?apikey=' + apitoken, jsonCreateData)
        .success(function (data, status, headers, config) {
            alert(data);
        })
        .error(function (data, status, headers, config) {
            alert(data, status, headers, config);
        });
    }
    $scope.getCampaign = function (id) {
        var _this = this;
        apitoken = window.sessionStorage.token;
        var jsonGetCampaignData = JSON.stringify({
            "Id": id
        });
        $http.get('//192.168.19.133/PafAPI/project/' + id + "?apikey=" + apitoken)
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
        $http.put('//192.168.19.133/PafAPI/project/' + data.Id + '?apikey=' + apitoken, jsonUpdateData)
        .success(function (data, status, headers, config) {
            alert(data);
        })
        .error(function (data, status, headers, config) {
            alert(data, status, headers, config);
        });
    }
    $scope.deleteCampaign = function (id) {
        var _this = this;
        $http.delete('//192.168.19.133/PafAPI/project/' + id + '?apikey=' + apitoken)
        .success(function (data, status, headers, config) {
            alert(data);
        })
        .error(function (data, status, headers, config) {
            alert(data, status, headers, config);
        });
    }

});
