app.service('LTCService', ['$http', function ($http) {
    // See BTCService.js — CryptoCompare is key-gated now; this reads Coinbase instead
    // and reshapes the response to match what the controller expects.
    return $http.get('https://api.coinbase.com/v2/prices/LTC-USD/spot')
        .then(function (data) {
            return { data: { USD: parseFloat(data.data.data.amount) } };
        })
        .catch(function (data) {

            return data;
        });
}]);
