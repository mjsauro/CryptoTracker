app.controller('ETHController', ['$scope', 'ETHService', function ($scope, ETHService) {
    ETHService.then(function (data) {

        console.log("eth")
        console.log(data.data.USD)
        $scope.USD = data.data.USD;

    });


    }]);
