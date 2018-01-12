app.service('LTCService', ['$http', function ($http) {
    return $http.get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=USD,LTC')
        .then(function (data) {
            return data;
        })
        .catch(function (data) {

            return data;
        });
}]);
