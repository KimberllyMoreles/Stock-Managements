/**
 * Interceptors configuration
 */
angular.module("stock_managements").config(function ($httpProvider) {

	//error interceptor made in interceptors/errorInterceptor.js
	$httpProvider.interceptors.push("errorInterceptor");
});