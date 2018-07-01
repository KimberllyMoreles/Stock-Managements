/**
 * Product add controller module
 * 
 * Function definitions to add a product and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("product_add_controller", function ($scope, productsAPI, categories) {
        
        //initializes $scope.categories
        $scope.categories = categories.data;

        //function that adds a new product
        $scope.add_product = function (product) {
            
            //calls saveProduct(product) from productsAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            productsAPI.saveProduct(product).then(successCallback, errorCallback);

            //in succeed, reset the product form and open up a success modal
            function successCallback(data) {
                $scope.reset_form(product);
                $("#successModal").modal();
            }

            //in error, open up an error modal
            function errorCallback(error) {
                $("#errorModal").modal();
            }
        };
                
        //function that resets the product scope
        //and sets product_add_form's fields pristine 
        $scope.reset_form = function (product) {
            delete $scope.product;
            $scope.product_add_form.$setPristine();
        };
    });