'use strict';

QUnit.module('Stub Example', {
    beforeEach: function () {
        console.group('Stub Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('Basic Stub Example', function (assert) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var result
    ,   stub;

    // Note that this is just an example, not really testing basicExample!
//    stub = sinon.stub(window, 'basicExample').returns('I am a stub');

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ACT
    result = basicExample();

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ASSERT 
    assert.strictEqual(result, 'In basicExample', 'The normal value should be returned');
/*  assert.ok(basicExample.called, 'The stub should have been called once');
    assert.strictEqual(result, 'I am a stub', 'The stubbed value should be returned');
    stub.restore(); // unwraps the stub
*/
});

QUnit.test('Stub Example using $.ajax', function (assert) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var result
    ,   sut
    ,   stub;

    // Defines a stub for the jQuery.ajax object
    stub = sinon.stub($, 'ajax').yieldsTo('success', 
        {'productDesc':'This is a Stubbed return value!!!'});

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ACT
    sut = product();
    result = sut.productDesc;

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ASSERT 
    assert.ok($.ajax.calledOnce, 'The Ajax stub should have been called once');
    assert.strictEqual(result, 'This is a Stubbed return value!!!', 'The stubbed value should be returned');
    stub.restore(); // unwraps the stub
});
