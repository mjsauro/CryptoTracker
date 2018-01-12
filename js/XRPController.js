app.controller('XRPController', ['$scope', 'XRPService', function ($scope, XRPService) {
    XRPService.then(function (data) {

        console.log("xrp")
        console.log(data.data.USD)
        $scope.USD = data.data.USD;

    });


    }]);
