/**
 * Category controller module
 * 
 * Function definitions to add, edit and load categories
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("category_controller", function ($scope, categoriesAPI) {

        //initializes empty $scope.categories
        $scope.categories = [];

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

        //function that adds a new category
        $scope.add_category = function (category) {

            //calls saveCategory(category) from categoriesAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            categoriesAPI.saveCategory(category).then(successCallback, errorCallback);

            //in succeed, reset the category form
            function successCallback(data) {
                $scope.reset_form(category);
            }

            //in error, shows a message with the error
            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        //function that ordenate the list
        $scope.order_data = function (field) {
            $scope.order_rule = field;
            $scope.order_direction = !$scope.order_direction;
        };

        //function that resets the category scope
        //and sets category_add_form's fields pristine 
        $scope.reset_form = function () {
            delete $scope.category;
            $scope.category_add_form.$setPristine();
        };

        //run the function that loads the categories
        load_categories();         
    });