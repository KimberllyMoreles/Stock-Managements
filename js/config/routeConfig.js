/**
 * Route configuration
 */
angular.module("stock_managements").config(function ($routeProvider) {
	
	//Category's add route
	$routeProvider.when("/category_add", {
		templateUrl: "view/category_add.html",
		controller: "category_add_controller"
	});

	//Category's list route
	$routeProvider.when("/category_list", {
		templateUrl: "view/category_list.html",
		controller: "category_list_controller",
		resolve: {
			categories: function (categoriesAPI) {
				return categoriesAPI.getCategories();
			}
		}
	});

	//Product's add route
	$routeProvider.when("/product_add", {
		templateUrl: "view/product_add.html",
		controller: "product_add_controller",
		resolve: {
			categories: function (categoriesAPI) {
				return categoriesAPI.getCategories();
			}
		}
	});

	//Product's list route
	$routeProvider.when("/product_list", {
		templateUrl: "view/product_list.html",
		controller: "product_list_controller",
		resolve: {
			products: function (productsAPI) {
				return productsAPI.getProducts();
			},
			categories: function (categoriesAPI) {
				return categoriesAPI.getCategories();
			}
		}
	});

	//Stock's add route
	$routeProvider.when("/stock_add", {
		templateUrl: "view/stock_add.html",
		controller: "stock_add_controller",
		resolve: {
			products: function (productsAPI) {
				return productsAPI.getProducts();
			},
		}
	});

	//Stock's list route
	$routeProvider.when("/stock_list", {
		templateUrl: "view/stock_list.html",
		controller: "stock_list_controller",
		resolve: {
			products: function (productsAPI) {
				return productsAPI.getProducts();
			},
			stocks: function (stocksAPI){
				return stocksAPI.getStocks();
			}
		}
	});

	/*
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html",
		controller: "stock_managementsCtrl",
		resolve: {
			contatos: function (contatosAPI) {
				return contatosAPI.getContatos();
			},
			operadoras: function (operadorasAPI) {
				return operadorasAPI.getOperadoras();
			}
		}
	});
	
	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function (contatosAPI, $route) {
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});*/
	$routeProvider.otherwise({redirectTo: "/category_list"});
});