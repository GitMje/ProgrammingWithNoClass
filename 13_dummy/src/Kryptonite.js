/*jslint plusplus: true, white: true */
'use strict';

var kryptonite = function (){
    var color,
    	affect,

	getColor = function () { return color },
    getAffect = function () { return affect },

    getFromAjax = function(url, successHandler, errorHandler) {
            $.ajax({
                type: 'GET',
                url: url,
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: successHandler,
                error: errorHandler
            });
    },

    successGetRandomKryptoniteStoneType = function (response) {
        console.log('successGetRandomKryptoniteStoneType ');
        color = response.Color;
        affect = response.Affect;
    },

    errorGetRandomKryptoniteStoneType = function (xhr, ajaxOptions, thrownError) {
        console.log('errorGetRandomKryptoniteStoneType');
    },

    getRandomKryptonite = function () {
        getFromAjax('/Home/GetRandomKryptoniteStoneTypeVm'
            , successGetRandomKryptoniteStoneType
            , errorGetRandomKryptoniteStoneType
        );
    },

	api = {
		getColor : getColor,
		getAffect : getAffect,
		getRandomKryptonite : getRandomKryptonite,
		getFromAjax : getFromAjax,
		__testonly__ : {
			successGetRandomKryptoniteStoneType : successGetRandomKryptoniteStoneType,
			errorGetRandomKryptoniteStoneType : errorGetRandomKryptoniteStoneType
		}
	};

	return api;
};