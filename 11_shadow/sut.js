'use strict';

function getProduct(id) {
	console.log('In getProduct WITH parameter! ' + id);
	//return 'WITH parameter';
	return 'not saying yet!';
}

function getProduct() {
	console.log('In getProduct NO parameter! ' + arguments[0]);
	//return 'NO parameter!';
	return 'not saying yet!';
} 