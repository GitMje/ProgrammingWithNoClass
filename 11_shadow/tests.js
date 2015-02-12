'use strict';

QUnit.module('Shadow Example', {
    beforeEach: function () {
        console.group('Shadow');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('Shadowy behavior', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 'not saying yet!'
        , result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = getProduct(10);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, 'Shadowed result should be equal to ' + expected);
});
