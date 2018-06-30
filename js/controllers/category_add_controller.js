/**
 * Category controller module
 * 
 * Function definitions to add, edit and load categories
 * Functions to ordenate the list and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("category_add_controller", function ($scope, categoriesAPI) {

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

        //function that resets the category scope
        //and sets category_add_form's fields pristine 
        $scope.reset_form = function () {
            delete $scope.category;
            $scope.category_add_form.$setPristine();
        };       
    });