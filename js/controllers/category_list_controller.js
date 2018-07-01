/**
 * Category controller module
 * 
 * Function definitions to add, edit and load categories
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("category_list_controller", function ($scope, categoriesAPI, categories) {

        //initializes empty $scope.categories
        $scope.categories = categories.data;

        //function that loads the categories list
        var load_categories = function () {

            //calls getCategories() from categories API,
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

        //function that deletes an existing category
        $scope.delete_category = function (id) {

            //calls updateCategory(category) from categoriesAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            categoriesAPI.deleteCategory(id).then(successCallback, errorCallback);

            //in succeed, reset the category form
            function successCallback() {
                load_categories();
                $("#dialogModal" + id).modal("hide");
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $scope.message = "Error: " + error;
                console.log($scope.message);
            }
        };

        //function that ordenate the list
        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };        
    });