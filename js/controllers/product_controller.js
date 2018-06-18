angular.module("stock_managements")
    .controller("product_controller", function ($scope, productsAPI, categoriesAPI) {
        $scope.categories = [];
        $scope.products = [];

        var load_products = function () {
            productsAPI.getProducts().then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.products = data.data;
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        $scope.add_product = function (product) {
            productsAPI.saveProduct(product).then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.reset_form(product);
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        var load_categories = function () {
            categoriesAPI.getCategories().then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.categories = data.data;
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };
                
        $scope.reset_form = function (product) {
            delete $scope.product;
            $scope.product_add_form.$setPristine();
        };

        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        load_products();
        load_categories();
    });