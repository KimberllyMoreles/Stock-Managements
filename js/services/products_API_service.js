/**
 * Factory function with API communication functions
 * Products
 */
angular.module("stock_managements").factory("productsAPI", function ($http, config) {
    
    //declares a private function that  
    //returns the get result from products
    var _getProducts = function () {
        return $http.get(config.baseUrl + "/products");
    };

    //declares a private function that   
    //receives a product object and 
    //returns a post result from products 
    var _saveProduct = function (product) {
        return $http.post(config.baseUrl + "/products", product);
    };

    //declares a private function that  
    //returns the get result from products
    var _getProduct = function (id) {
        return $http.get(config.baseUrl + "/products/" + id);
    };

    //declares a private function that   
    //receives a product object and 
    //returns a post result from products 
    var _updateProduct = function (product) {
        return $http.post(config.baseUrl + "/products", product);
    };

    //returns the object
    return {
        getProducts: _getProducts,
        saveProduct: _saveProduct,
        getProduct: _getProduct,
        updateProduct: _updateProduct
    };
});