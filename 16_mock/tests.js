'use strict';

QUnit.module('Mock Example', {
    beforeEach: function () {
        console.group('Mock Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});


QUnit.test('returns the return value from the original function', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var myAPI = { method: function () {} }
    ,   mock = sinon.mock(myAPI)
    ,   expectation
    ,   result
    ,   proxy;

    // Setup basic expectation
    expectation = mock.expects('method');

    // Expect the method to be called exactly once.
    expectation.once();
 
    // Use this expectation as a stub
    expectation.returns(42);

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    proxy = oneShot(myAPI.method);
    result = proxy();

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(result, 42, result + ' should equal ' + 42);
    mock.verify();
    mock.restore();
});
