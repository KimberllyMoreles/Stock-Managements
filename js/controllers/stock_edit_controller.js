/**
 * Stock edition controller module
 * 
 * Function definitions to edit a stock entry
 * 
 */
angular.module("stock_managements")
    .controller("stock_edit_controller", function ($scope, stocksAPI, stock, products) {

        //initializes $scope.products and $scope.stock
        $scope.stock = stock.data;
        $scope.products = products.data;

        //function that updates an existing stock
        $scope.update_stock = function (stock) {

            //calls updateStock(stock) from stocksAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            stocksAPI.updateStock(stock).then(successCallback, errorCallback);

            //in succeed, open up a success modal
            function successCallback() {
                $("#successModal").modal();
            }

            //in error, open up an error modal
            function errorCallback(error) {
                $("#errorModal").modal();
            }
        };   
    });