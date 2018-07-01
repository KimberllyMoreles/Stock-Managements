/**
 * Product edition controller module
 * 
 * Function definitions to edit a product
 * 
 */
angular.module("stock_managements")
    .controller("product_edit_controller", function ($scope, productsAPI, product, categories) {

        //initializes $scope.categories and $scope.product
        $scope.product = product.data;
        $scope.categories = categories.data;

        //function that updates an existing product
        $scope.update_product = function (product) {

            //calls updateProduct(product) from productsAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            productsAPI.updateProduct(product).then(successCallback, errorCallback);

            //in succeed, reset the product form and open up a success modal
            function successCallback() {
                $scope.reset_form(product);
                $("#successModal").modal();
            }

            //in error, open up an error modal
            function errorCallback(error) {
                $("#errorModal").modal();
            }
        };       
    });