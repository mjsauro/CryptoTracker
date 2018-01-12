app.controller('LTCController', ['$scope', 'LTCService', function ($scope, LTCService) {
    LTCService.then(function (data) {

        console.log("ltc")
        console.log(data.data.USD)
        $scope.USD = data.data.USD;

    });


    }]);
