'use strict';

var theDependency = {
	someMethod: function () {
		return 10;
	}
};

var appObject = {
	callDependency: function() {
		theDependency.someMethod();
	},

	callParameterInjectedDependency: function(aDependency) {
		aDependency.someMethod();
	}
};