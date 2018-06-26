/**
 * Product controller module
 * 
 * Function definitions to add, edit and load products
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("product_controller", function ($scope, productsAPI, categoriesAPI) {
        
        //initializes empty $scope.categories and $scope.products
        $scope.categories = [];
        $scope.products = [];

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

        //function that loads the categories list
        var load_categories = function () {
            
            //calls getCategories() from categoriesAPI,
            //if the request succeed calls the success function,
            //if not call the error one
            categoriesAPI.getCategories().then(successCallback, errorCallback);
            
            //in succeed, sets $scope.categories with the data result
            function successCallback(data) {
                $scope.categories = data.data;
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

        //function that ordenates the list
        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };

        //run the function that loads the products and categories
        load_products();
        load_categories();
    });