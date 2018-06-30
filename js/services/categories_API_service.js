/**
 * Factory function with API communication functions
 * Categories
 */
angular.module("stock_managements").factory("categoriesAPI", function ($http, config) {

    //declares a private function that  
    //returns the get result from categories
    var _getCategories = function () {
        return $http.get(config.baseUrl + "/categories");
    };

    //declares a private function that   
    //receives a category object and 
    //returns a post result from categories 
    var _saveCategory = function (category) {
        return $http.post(config.baseUrl + "/categories", category);
    };

    //declares a private function that  
    //returns the get result from categories
    var _getCategory = function (id) {
        return $http.get(config.baseUrl + "/categories/" + id);
    };

    //declares a private function that   
    //receives a category object and 
    //returns a post result from categories 
    var _updateCategory = function (category) {
        return $http.post(config.baseUrl + "/categories", category);
    };

    //returns the object 
    return {
        getCategories: _getCategories,
        saveCategory: _saveCategory,
        getCategory: _getCategory,
        updateCategory: _updateCategory
    };
});