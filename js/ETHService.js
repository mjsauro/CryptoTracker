app.service('ETHService', ['$http', function ($http) {
    return $http.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,ETH')
        .then(function (data) {
            return data;
        })
        .catch(function (data) {

            return data;
        });
}]);
