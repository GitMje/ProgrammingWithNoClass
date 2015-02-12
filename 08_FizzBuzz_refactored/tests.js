'use strict';

QUnit.module('FizzBuzz Refactored', {
    beforeEach: function () {
        console.group('FizzBuzz Refactored Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('fizz gets 3 and returns Fizz', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 'Fizz',
        sut = fizzBuzz(),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.__testonly__.fizz(3);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, result + ' should equal ' + expected);
});

QUnit.test('fizz gets 5 and returns empty string', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = '',
        sut = fizzBuzz(),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.__testonly__.fizz(5);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, result + ' should equal ' + expected);
});

QUnit.test('buzz gets 5 and returns Buzz', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 'Buzz',
        sut = fizzBuzz(),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.__testonly__.buzz(5);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, result + ' should equal ' + expected);
});

QUnit.test('buzz gets 3 and returns empty string', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = '',
        sut = fizzBuzz(),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.__testonly__.buzz(3);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, result + ' should equal ' + expected);
});

QUnit.test('run gets 15 and returns FizzBuzz', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 'FizzBuzz',
        sut = fizzBuzz(),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.run(15);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, result + ' should equal ' + expected);
});

QUnit.test('run gets 11 and returns original value', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 11,
        sut = fizzBuzz(),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.run(11);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, result + ' should equal ' + expected);
});

QUnit.test('run with custom config and returns custom string', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 'SoftKittyWarmKittyLittleBallOfFur',
        config = [{divNumber: 2, word: 'Soft'}, 
                  {divNumber: 7, word: 'Kitty'},
                  {divNumber: 4, word: 'WarmKitty'}, 
                  {divNumber: 14, word: 'LittleBallOfFur'},],
        sut = fizzBuzz(config),
        result;

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    result = sut.run(28);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, expected, result + ' should equal ' + expected);
});