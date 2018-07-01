/**
 * Stock controller module
 * 
 * Function definitions to add, edit and load data from the stock
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("stock_list_controller", function ($scope, stocks, products, stocksAPI) {
        
        //initializes empty $scope.stocks and $scope.products
        $scope.products = products.data;
        $scope.stocks = stocks.data;

        //function that loads the stocks list
        var load_stocks = function () {

            //calls getStocks() from stocks API,
            //if the request succeed calls the success function,
            //if not call the error one
            stocksAPI.getStocks().then(successCallback, errorCallback);

            //in succeed, sets $scope.stocks with the data result
            function successCallback(data) {
                $scope.stocks = data.data;
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        //function that deletes an existing stock
        $scope.delete_stock = function (id) {

            //calls deleteStock(stock) from stocksAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            stocksAPI.deleteStock(id).then(successCallback, errorCallback);

            //in succeed, reset the stock form
            function successCallback() {
                load_stocks();
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $scope.message = "Error: " + error;
                console.log($scope.message);
            }
        };
        
        //function that ordenates the list
        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };
    });