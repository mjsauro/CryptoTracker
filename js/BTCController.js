app.controller('BTCController', ['$scope', 'BTCService', function ($scope, BTCService) {
    BTCService.then(function (data) {
        console.log(data.data);
        $scope.CurrentDate = data.data.time.updatedISO;
        $scope.CurrentRate = data.data.bpi.USD.rate_float;
            
    });

    }]);