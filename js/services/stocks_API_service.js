/**
 * Factory function with API communication functions
 * Stocks
 */
angular.module("stock_managements").factory("stocksAPI", function ($http, config) {
    
    //declares a private function that  
    //returns the get result from stocks
    var _getStocks = function () {
        return $http.get(config.baseUrl + "/stocks");
    };

    //declares a private function that   
    //receives a stock object and 
    //returns a post result from stocks 
    var _saveStock = function (stock) {
        return $http.post(config.baseUrl + "/stocks", stock);
    };

    //returns the object
    return {
        getStocks: _getStocks,
        saveStock: _saveStock
    };
});