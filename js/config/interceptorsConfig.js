angular.module("stock_managements").config(function ($httpProvider) {
	$httpProvider.interceptors.push("errorInterceptor");
});