/**
 * Category edition controller module
 * 
 * Function definitions to edit a category and reset the form
 * 
 */
angular.module("stock_managements")
    .controller("category_edit_controller", function ($scope, categoriesAPI, category) {

        $scope.category = category.data;
        
        //function that updates an existing category
        $scope.update_category = function (category) {

            //calls updateCategory(category) from categoriesAPI, 
            //if everything goes right calls the success function, 
            //if not calls the error one
            categoriesAPI.updateCategory(category).then(successCallback, errorCallback);

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
        //and sets category_edit_form's fields pristine 
        $scope.reset_form = function () {
            delete $scope.category;
            $scope.category_edit_form.$setPristine();
        };       
    });