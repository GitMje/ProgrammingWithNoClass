// For more info go to https://developer.chrome.com/devtools/docs/console-api
// %s = string
// %o = Dom object
// %c = css
// %O = exampndable javascript object
// %d and %i = integer
// %f = floating point
'use strict';

console.table(["apples", "oranges", "bananas"]);

console.log ("!!!%s!!!", "Hello World");
console.log ("%c>css large text test<", "font-size:large");
console.log ("Node count: %d, and the time is %f.", document.childNodes.length, Date.now());

console.error("Example Error statement!");
console.warn("Example Warning statement!");
console.info("Example Info statement.");
console.trace("Example Trace statement.");
console.trace(1,2,3);

console.dir(document); // show a JavaScript representation of a Dom object
console.log("Note: this should be the same as above statement: %O", document);

console.group("stuff");
console.log("I'm in the group.");
console.groupEnd();

console.groupCollapsed("collapsed");
console.log("I'm hiding in the group.");
console.groupEnd();

console.time("myTimer");
setTimeout(function(){console.log("timeout!!!");}, 10000);  
console.timeEnd("myTimer");

console.profile("Example Profile");

function ProfileHelper() {
	var slowArray = []
	, i;

	function slowItDown() {
		var number = Math.random();
		slowArray.push(+number);
		slowArray.sort();
	}

	this.wasteOfTime1 = function wasteOfTime1 () {
		
		for (i = 0; i < 1000; i++){ 
			if ((i % 2) === 0) {slowItDown();}
		}
	};

	this.wasteOfTime2 = function wasteOfTime2 () {
		for (i = 0; i < 1000; i++){ 
			if ((i % 1000) === 0) {slowItDown();}
		}
	};
}

var ph1 = new ProfileHelper();
ph1.wasteOfTime1();
var ph2 = new ProfileHelper();
ph2.wasteOfTime2();
console.profileEnd();

console.time("In the timeline");
console.timeStamp("Example Stamp");
console.timeEnd("In the timeline");

console.assert(false, "Assert me!");
