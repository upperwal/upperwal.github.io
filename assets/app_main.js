requirejs.config({
	paths: {
		'jquery': "libs/jquery/dist/jquery.min",
		'bootstrap': "libs/bootstrap/js/bootstrap.min",
		'angular': "libs/angular/angular.min",
		'angular_animate': "libs/angular-animate/angular-animate.min",
		'angular_routes': "libs/angular-route/angular-route.min"
	},
	shim: {
		'angular_animate': ['angular'],
		'angular_routes': ['angular']
	}
});

requirejs(['../app/app_module']);