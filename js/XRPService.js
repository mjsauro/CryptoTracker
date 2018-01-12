app.service('XRPService', ['$http', function ($http) {
    return $http.get('https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=USD,XRP')
        .then(function (data) {
            return data;
        })
        .catch(function (data) {

            return data;
        });
}]);
