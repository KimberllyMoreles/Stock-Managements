angular.module("stock_managements").factory("categoriesAPI", function ($http, config) {
    var _getCategories = function () {
        return $http.get(config.baseUrl + "/categories");
    };

    var _saveCategory = function (category) {
        return $http.post(config.baseUrl + "/categories", category);
    };

    return {
        getCategories: _getCategories,
        saveCategory: _saveCategory
    };
});