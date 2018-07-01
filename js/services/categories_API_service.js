/**
 * Factory function with API communication functions
 * Categories
 */
angular.module("stock_managements").factory("categoriesAPI", function ($http, config) {

    //declares a private function that  
    //returns all categories from categories
    var _getCategories = function () {
        return $http.get(config.baseUrl + "/categories");
    };

    //declares a private function that   
    //receives a category object and 
    //returns a post result at categories 
    var _saveCategory = function (category) {
        return $http.post(config.baseUrl + "/categories", category);
    };

    //declares a private function that  
    //returns a specific category from categories
    var _getCategory = function (id) {
        return $http.get(config.baseUrl + "/categories/" + id);
    };

    //declares a private function that   
    //receives a category object and 
    //update it where the id matches 
    var _updateCategory = function (category) {
        return $http.put(config.baseUrl + "/categories/" + category.id, category);
    };

    //declares a private function that receives 
    //a category id and delete it
    var _deleteCategory = function (id) {
        return $http.delete(config.baseUrl + "/categories/" + id);
    };

    //returns the object 
    return {
        getCategories: _getCategories,
        saveCategory: _saveCategory,
        getCategory: _getCategory,
        updateCategory: _updateCategory,
        deleteCategory: _deleteCategory
    };
});