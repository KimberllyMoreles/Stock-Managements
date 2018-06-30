/**
 * Category controller module
 * 
 * Function definitions to add, edit and load categories
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("category_list_controller", function ($scope, categoriesAPI, categories) {

        //initializes empty $scope.categories
        $scope.categories = categories.data;

        //function that ordenate the list
        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };        
    });