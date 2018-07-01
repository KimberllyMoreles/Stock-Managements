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

    //declares a private function that  
    //returns the get result from stocks
    var _getStock = function (id) {
        return $http.get(config.baseUrl + "/stocks/" + id);
    };

    //declares a private function that   
    //receives a stock object and 
    //returns a post result from stocks 
    var _updateStock = function (stock) {
        return $http.put(config.baseUrl + "/stocks/" + stock.id, stock);
    };

    //declares a private function that receives 
    //a stock object and delete it
    var _deleteStock = function (id) {
        return $http.delete(config.baseUrl + "/stocks/" + id);
    };

    //returns the object
    return {
        getStocks: _getStocks,
        saveStock: _saveStock,
        getStock: _getStock,
        updateStock: _updateStock,
        deleteStock: _deleteStock
    };
});