/**
 * Stock add controller module
 * 
 * Function definitions to add data to stock and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("stock_add_controller", function ($scope, stocksAPI, products) {
        
        //initializes $scope.products
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

            //in succeed, reset the stock form and open up a success modal
            function successCallback() {
                $scope.reset_form(stock);
                $("#successModal").modal();
            }

            //in error, open up an error modal
            function errorCallback(error) {
                $("#errorModal").modal();
            }
        };

        //function that resets the stock scope
        //and sets stock_add_form's fields pristine 
        $scope.reset_form = function (stock) {
            delete $scope.stock;
            $scope.stock_add_form.$setPristine();
        };
    });