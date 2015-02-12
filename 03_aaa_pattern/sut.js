'use strict';

function Account (id) {
	var balance = 0
	,	identifier = id;

	this.setBalance = function setBalance(aBalance) {
		console.log('setBalance from %d to %d for account %d.', balance, aBalance, identifier);
		balance = aBalance;
	};

	this.getBalance = function getBalance() {
		console.log('getBalance returns %d for account %d.', balance, identifier);
		return balance;
	};
}