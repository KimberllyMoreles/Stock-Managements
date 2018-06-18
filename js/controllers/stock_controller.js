angular.module("stock_managements")
    .controller("stock_controller", function ($scope, stocksAPI, productsAPI) {
        $scope.products = [];
        $scope.stocks = [];

        var load_stocks = function () {
            stocksAPI.getStocks().then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.stocks = data.data;
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        $scope.add_stock = function (stock) {
            stocksAPI.saveStock(stock).then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.reset_form(stock);
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        var load_products = function () {
            productsAPI.getProducts().then(successCallback, errorCallback);

            function successCallback(data) {
                $scope.products = data.data;
            }

            function errorCallback(error) {
                $scope.message = "Error: " + error;
            }
        };

        $scope.reset_form = function (stock) {
            delete $scope.stock;
            $scope.stock_add_form.$setPristine();
        };

        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        load_stocks();
        load_products();
    });