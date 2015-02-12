'use strict';

QUnit.module('AAA demo', {
    beforeEach: function () {
        console.group('AAA pattern ' + QUnit.test.name);
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('methodUnderTest - Condition results in Expected Behavior', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var sut = new Account(1234)
    ,   expected = 12
    ,   result;

    sut.setBalance(12);

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.getBalance();

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, 'getBalance should return the correct value after being set with setBalance');
});