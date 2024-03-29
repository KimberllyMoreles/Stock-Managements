/**
 * Factory function with API communication functions
 * Products
 */
angular.module("stock_managements").factory("productsAPI", function ($http, config) {
    
    //declares a private function that  
    //returns all products from products
    var _getProducts = function () {
        return $http.get(config.baseUrl + "/products");
    };

    //declares a private function that   
    //receives a product object and 
    //returns a post result at products 
    var _saveProduct = function (product) {
        return $http.post(config.baseUrl + "/products", product);
    };

    //declares a private function that  
    //returns a specific product from products
    var _getProduct = function (id) {
        return $http.get(config.baseUrl + "/products/" + id);
    };

    //declares a private function that   
    //receives a product object and 
    //update it where the id matches
    var _updateProduct = function (product) {
        return $http.put(config.baseUrl + "/products/" + product.id, product);
    };

    //declares a private function that receives 
    //a stock id and delete it
    var _deleteProduct = function (id) {
        return $http.delete(config.baseUrl + "/products/" + id);
    };


    //returns the object
    return {
        getProducts: _getProducts,
        saveProduct: _saveProduct,
        getProduct: _getProduct,
        updateProduct: _updateProduct,
        deleteProduct: _deleteProduct
    };
});