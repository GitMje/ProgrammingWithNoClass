'use strict';

function basicExample() {
    return 'In basicExample';
}

function product(){
	var productDesc = 'hello';

    $.ajax({
        url: '/an/ajax/resource',
        dataType: 'json',
        success: function(data) {
            console.log('ajax call successful ' + data.productDesc);
            productDesc = data.productDesc;
        },
        error: function() {
            console.log('Error occurred');
        },
        complete: function() {
            console.log('Complete occurred');
        }
    });
	
    return {
    	productDesc : productDesc
    };
}