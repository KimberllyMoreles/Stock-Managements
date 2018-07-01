/**
 * Product controller module
 * 
 * Function definitions to add, edit and load products
 * Functions to ordenate the list and reset the form
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

        //function that deletes an existing product
        $scope.delete_product = function (id) {

            //calls updateProduct(product) from productsAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            productsAPI.deleteProduct(id).then(successCallback, errorCallback);

            //in succeed, reset the product form
            function successCallback() {
                load_products();
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