angular.module("stock_managements")
    .controller("category_controller", function ($scope, categoriesAPI) {
        //$scope.categories = [];

        var load_categories = function () {
            categoriesAPI.getCategories().then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.categories = data.data;
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        $scope.add_category = function (category) {
            categoriesAPI.saveCategory().then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.reset_form(category);
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        $scope.reset_form = function () {
            delete $scope.category;
            $scope.category_add_form.$setPristine();
        };

        load_categories();         
    });