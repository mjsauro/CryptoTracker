app.service('BTCService', ['$http', function ($http) {
    return $http.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,BTC')
        .then(function (data) {
            return data;
        })
        .catch(function (data) {

            return data;
        });
}]);
/*
app.factory('BTCService', ['$http', function ($http) {
    return $http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function (data) {
            return data;
        })
        .catch(function (data) {

            return data;
        });
}]);
*/
