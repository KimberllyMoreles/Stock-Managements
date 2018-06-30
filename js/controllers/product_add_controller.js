/**
 * Product controller module
 * 
 * Function definitions to add, edit and load products
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("product_add_controller", function ($scope, productsAPI, categories) {
        
        //initializes empty $scope.categories and $scope.products
        $scope.categories = categories.data;

        //function that adds a new product
        $scope.add_product = function (product) {
            
            //calls saveProduct(product) from productsAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            productsAPI.saveProduct(product).then(successCallback, errorCallback);

            //in succeed, reset the product form
            function successCallback(data) {
                $scope.reset_form(product);
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };
                
        //function that resets the product scope
        //and sets product_add_form's fields pristine 
        $scope.reset_form = function (product) {
            delete $scope.product;
            $scope.product_add_form.$setPristine();
        };
    });