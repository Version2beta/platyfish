app.controller('UserCtrl', function ($scope, $http) {
    var _this = this;
    debugger;
    $scope.login = function () {
        debugger;
        var jsonLoginData = JSON.stringify({ "Username": this.name, "Password": this.pwd });
        $http.post('//192.168.19.133/PafAPI/authorize/', jsonLoginData)
        .success(function (data, status, headers, config) {
            this.window.sessionStorage.clear();
            this.window.sessionStorage.token = data.SessionKey;
        })
        .error(function (data, status, headers, config) {
            debugger;
            alert(data, status, headers, config);
        });
    }

    $scope.create = function () {
        var jsonUserCreation = JSON.stringify({

        })
    }

    $scope.register = function ($scope, $http) {

    }
});
