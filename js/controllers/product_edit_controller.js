/**
 * Product edition controller module
 * 
 * Function definitions to edit a product and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("product_edit_controller", function ($scope, productsAPI, product, categories) {

        $scope.product = product.data;
        $scope.categories = categories.data;

        //function that updates an existing product
        $scope.update_product = function (product) {

            //calls updateProduct(product) from productsAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            productsAPI.updateProduct(product).then(successCallback, errorCallback);

            //in succeed, reset the product form
            function successCallback() {
                $scope.reset_form(product);
                $("#successModal").modal();
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $("#errorModal").modal();
            }
        };

        //function that resets the product scope
        //and sets product_edit_form's fields pristine 
        $scope.reset_form = function () {
            delete $scope.product;
            $scope.product_edit_form.$setPristine();
        };       
    });