define(function() {
	function defineRoutes($routeProvider) {

		$routeProvider
			.when('/dashboard', {
				templateUrl: 'app/components/dashboard/dashboardView.html',
				controller: 'dashboardController'
			}).
			otherwise({
				redirectTo: '/dashboard'
			});
	
	}

	defineRoutes.$inject = ['$routeProvider'];
	return defineRoutes;
});