'use strict';

var fizzBuzz = function (anArray) {
	var masterArray;

	// Initialize to normal fizzBuzz for backward compatibility
	if (anArray === undefined) {
	   anArray = [{divNumber: 3, word: 'Fizz'}, 
	   			  {divNumber: 5, word: 'Buzz'}];
	}
	masterArray = anArray;

	var getDivWord = function (value, divNumber, word) {
		if ((value % divNumber) === 0) {
			return word;
		}
		return '';
	};

	var run = function (value) {
		var i = 0,
			result = '';

		for (i = 0; i < masterArray.length; i++) {
			result += getDivWord(value, 
						masterArray[i].divNumber, 
						masterArray[i].word);
		}

		if (result === '') {
			return value;
		}
		return result;
	};

	var api = {
		__TestOnly__ : {
			getDivWord: getDivWord,
		},
		run: run
	};

	return api;
};