/**
 * Category controller module
 * 
 * Function definitions to add, edit and load categories
 * Auxiliar functions to 
 */

angular.module("stock_managements")
    .controller("category_controller", function ($scope, categoriesAPI) {
        //$scope.categories = [];

        var load_categories = function () {
            categoriesAPI.getCategories().then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.categories = data.data;
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        $scope.add_category = function (category) {
            categoriesAPI.saveCategory(category).then(successCallback, errorCallback);

            console.log(category);
            function successCallback(data) {
                $scope.reset_form(category);
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };

        $scope.reset_form = function () {
            delete $scope.category;
            $scope.category_add_form.$setPristine();
        };

        load_categories();         
    });