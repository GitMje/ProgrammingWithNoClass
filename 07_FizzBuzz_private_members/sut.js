'use strict';

var fizzBuzz = function (){

	var fizz = function (value) {
		if ((value % 3) === 0){
			return 'Fizz';			
		}
		return '';
	},
	
	buzz = function (value) {
		if ((value % 5) === 0){
			return 'Buzz';			
		}
		return '';
	},

	run = function (value) {
		var result = fizz(value) + buzz(value);
		
		if (result === ''){
			return value;
		}
		
		return result;
	},
	
	api = {
		run : run,
		__testonly__ : {
			fizz : fizz,
			buzz : buzz
		}
	};

	return api;
};