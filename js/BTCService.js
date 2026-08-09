app.service('BTCService', ['$http', function ($http) {
    // CryptoCompare's price endpoint became key-gated after this was written, so the
    // price now comes from Coinbase's keyless spot endpoint. The response is reshaped
    // into the { data: { USD: ... } } form the controller already expects, so nothing
    // outside this file had to change.
    return $http.get('https://api.coinbase.com/v2/prices/BTC-USD/spot')
        .then(function (data) {
            return { data: { USD: parseFloat(data.data.data.amount) } };
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
