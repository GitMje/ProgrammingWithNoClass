'use strict';

QUnit.module("Basics for talk", {
    beforeEach: function () {
        console.group('Basics');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('Test 1', function (assert) {
    console.log('In Test 1');
    assert.ok(true, 'Should always be true');
});

QUnit.test('Test 2', function (assert) {
    var a = 1,
        b = '1';

    console.log('In Test 2');

    //assert.strictEqual(a, b, 'Test of a equal b');
    assert.equal(a, b, 'Test of a equal b');
});


QUnit.test('Showing QUnit Logging to the Console', function (assert) {
    QUnit.log(function( details ) {
        console.log( 'Log: ', details.actual, details.expected, details.result, details.message );
    });
    
    assert.equal(1, '1', 'Trival assert');
});
