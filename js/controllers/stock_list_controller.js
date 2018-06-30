/**
 * Stock controller module
 * 
 * Function definitions to add, edit and load data from the stock
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("stock_list_controller", function ($scope, stocks, products) {
        
        //initializes empty $scope.categories and $scope.products
        $scope.products = products.data;
        $scope.stocks = stocks.data;

        //function that ordenates the list
        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };
    });