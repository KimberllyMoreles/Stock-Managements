/**
 * Stock edition controller module
 * 
 * Function definitions to edit a stock and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("stock_edit_controller", function ($scope, stocksAPI, stock, products) {

        $scope.stock = stock.data;
        $scope.products = products.data;

        //function that updates an existing stock
        $scope.update_stock = function (stock) {

            //calls updateStock(stock) from stocksAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            stocksAPI.updateStock(stock).then(successCallback, errorCallback);

            //in succeed, reset the stock form
            function successCallback() {
                $scope.reset_form(stock);
                $("#successModal").modal();
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $("#errorModal").modal();
            }
        };

        //function that resets the stock scope
        //and sets stock_edit_form's fields pristine 
        $scope.reset_form = function () {
            delete $scope.stock;
            $scope.stock_edit_form.$setPristine();
        };       
    });