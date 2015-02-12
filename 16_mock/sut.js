'use strict';

// Based on mock example from http://sinonjs.org/

var oneShot = function oneShot(fn) {
    var returnValue, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
            //fn.apply(this, arguments);
        }
        return returnValue;
    };
};