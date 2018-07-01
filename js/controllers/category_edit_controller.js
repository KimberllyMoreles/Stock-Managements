/**
 * Category edition controller module
 * 
 * Function definitions to update a category
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

            //in succeed, reset the category form and open up a success modal
            function successCallback(data) {
                $scope.reset_form(category);
                $("#successModal").modal();
            }

            //in error, open up an error modal
            function errorCallback(error) {
                $("#errorModal").modal();
            }
        };    
    });