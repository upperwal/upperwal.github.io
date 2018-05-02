define(['angular', 
	'angular_routes',
	'../app/app.routes',
	'app/components/dashboard/dashboardController.js'
	] ,
	function(a,b,routes,dashboard) {
		
		var payoutApp = angular.module('payoutApp', ['ngRoute']);

		/***** Module Config, Add all routes here with template and controller *****/
		payoutApp.config(routes);
		/****************************************************************************/


		/***** Add controller to the module *****/
		payoutApp.controller('dashboardController', dashboard);
		/****************************************/


		/***** Bootstrap Angular App *****/
		angular.bootstrap(document, ['payoutApp']);
		/*********************************/
});