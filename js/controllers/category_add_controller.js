/**
 * Category add controller module
 * 
 * Function definitions to add a category and reset the form
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

        //function that resets the category scope
        //and sets category_add_form's fields pristine 
        $scope.reset_form = function () {
            delete $scope.category;
            $scope.category_add_form.$setPristine();
        };       
    });