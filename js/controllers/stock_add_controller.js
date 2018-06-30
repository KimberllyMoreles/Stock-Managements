/**
 * Stock controller module
 * 
 * Function definitions to add, edit and load data from the stock
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("stock_add_controller", function ($scope, stocksAPI, products) {
        
        //initializes empty $scope.products and $scope.stocks
        $scope.products = products.data;

        //function that adds a new item to stocks entity
        $scope.add_stock = function (stock) {
            
            //gets the stock.datetime passed through the form
            //and sets it's type to Date
            stock.datetime = new Date(stock.datetime);

            //calls saveStock(stock) from stocksAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            stocksAPI.saveStock(stock).then(successCallback, errorCallback);

            //in succeed, reset the stock form
            function successCallback(data) {
                $scope.reset_form(stock);
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        //function that resets the stock scope
        //and sets  stock_add_form's fields pristine 
        $scope.reset_form = function (stock) {
            delete $scope.stock;
            $scope.stock_add_form.$setPristine();
        };
    });