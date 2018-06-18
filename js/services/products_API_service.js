angular.module("stock_managements").factory("productsAPI", function ($http, config) {
    var _getProducts = function () {
        return $http.get(config.baseUrl + "/products");
    };

    var _saveProduct = function (product) {
        return $http.post(config.baseUrl + "/products", product);
    };

    return {
        getProducts: _getProducts,
        saveProduct: _saveProduct
    };
});