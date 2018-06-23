angular.module("stock_managements").factory("stocksAPI", function ($http, config) {
    var _getStocks = function () {
        return $http.get(config.baseUrl + "/stocks");
    };

    var _saveStock = function (stock) {
        return $http.post(config.baseUrl + "/stocks", stock);
    };

    return {
        getStocks: _getStocks,
        saveStock: _saveStock
    };
});