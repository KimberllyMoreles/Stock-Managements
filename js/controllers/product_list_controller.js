/**
 * Product list controller module
 * 
 * Function definitions to delete a product
 * and load products
 * 
 */
angular.module("stock_managements")
    .controller("product_list_controller", function ($scope, products, categories, productsAPI) {
        
        //initializes empty $scope.categories and $scope.products
        $scope.categories = categories.data;
        $scope.products = products.data;

        //function that loads the products list
        var load_products = function () {

            //calls getProducts() from products API,
            //if the request succeed calls the success function,
            //if not calls the error one
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

        //function that deletes an existing product
        $scope.delete_product = function (id) {

            //calls deleteProduct(id) from productsAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            productsAPI.deleteProduct(id).then(successCallback, errorCallback);

            //in succeed, reload the products list and hide the dialog modal
            function successCallback() {
                load_products();
                $("#dialogModal" + id).modal("hide");
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $scope.message = "Error: " + error;
                console.log($scope.message);
            }
        };
    });