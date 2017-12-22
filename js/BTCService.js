app.factory('BTCService', ['$http', function ($http) {
    return $http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function (data) {
            return data;
        })
        .catch(function (data) {

            return data;
        });
}]);
