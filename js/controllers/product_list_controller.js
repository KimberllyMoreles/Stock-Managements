/**
 * Product controller module
 * 
 * Function definitions to add, edit and load products
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("product_list_controller", function ($scope, products, categories) {
        
        //initializes empty $scope.categories and $scope.products
        $scope.categories = categories.data;
        $scope.products = products.data;

        //function that ordenates the list
        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };
    });