/**
 * Stock controller module
 * 
 * Function definitions to add, edit and load data from the stock
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("stock_controller", function ($scope, stocksAPI, productsAPI) {
        
        //initializes empty $scope.products and $scope.stocks
        $scope.products = [];
        $scope.stocks = [];        

        //function that loads the stocks list
        var load_stocks = function () {
            
            //calls getStocks() from stocksAPI,
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

        //function that loads the products list
        var load_products = function () {
            
            //calls getProducts() from productsAPI,
            //if the request succeed calls the success function,
            //if not call the error one
            productsAPI.getProducts().then(successCallback, errorCallback);

            //in succeed, sets $scope.products with the data result
            function successCallback(data) {
                $scope.products = data.data;
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

        //function that ordenate the list
        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };

        //run the function that loads the data from stocks and products
        load_stocks();
        load_products();
    });