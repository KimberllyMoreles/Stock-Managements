/**
 * Error 404 interceptor
 */
angular.module("stock_managements").factory("errorInterceptor", function ($q, $location) {
	return {
		responseError: function (rejection) {
			if (rejection.status === 404) {
				$location.path("/error");
			}
			return $q.reject(rejection);
		}
	};
});