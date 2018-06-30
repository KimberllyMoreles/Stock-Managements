/**
 * Route configuration
 */
angular.module("stock_managements").config(function ($routeProvider) {
	
	//Category's add route
	$routeProvider.when("/category_add", {
		templateUrl: "view/category_add.html",
		controller: "category_add_controller"
	});

	//Category's update route
	$routeProvider.when("/category_edit/:id", {
		templateUrl: "view/category_edit.html",
		controller: "category_edit_controller",
		resolve: {
			category: function (categoriesAPI, $route) {
				return categoriesAPI.getCategory($route.current.params.id);
			}
		}
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

	//Product's update route
	$routeProvider.when("/product_edit/:id", {
		templateUrl: "view/product_edit.html",
		controller: "product_edit_controller",
		resolve: {
			product: function (productsAPI, $route) {
				return productsAPI.getProduct($route.current.params.id);
			},
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

	//Stock's update route
	$routeProvider.when("/stock_edit/:id", {
		templateUrl: "view/stock_edit.html",
		controller: "stock_edit_controller",
		resolve: {			
			products: function (productsAPI) {
				return productsAPI.getProducts();
			},
			stock: function (stocksAPI, $route) {
				return stocksAPI.getStock($route.current.params.id);
			}
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

	//Error's page route
	$routeProvider.when("/error", {
		templateUrl: "view/error.html",
	});

	//Default route
	$routeProvider.otherwise({redirectTo: "/stock_list"});
});