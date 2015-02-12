'use strict';

QUnit.module('FizzBuzz from Scratch', {
    beforeEach: function () {
        console.group('FizzBuzz from Scratch Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('fizz - passing 3 returns Fizz', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 'Fizz'
        , result
        , sut;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    sut = fizzBuzz();
    result = sut.fizz(3);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, 'Assert equality');
});