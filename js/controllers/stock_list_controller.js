/**
 * Stock list controller module
 * 
 * Function definitions to load data  
 * from the stock and delete it 
 * 
 */
angular.module("stock_managements")
    .controller("stock_list_controller", function ($scope, stocks, products, stocksAPI) {
        
        //initializes $scope.stocks and $scope.products
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

            //in succeed, reloads the stocks list and hide the modal dialog
            function successCallback() {
                load_stocks();
                $("#dialogModal" + id).modal("hide");
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $scope.message = "Error: " + error;
                console.log($scope.message);
            }
        };
    });