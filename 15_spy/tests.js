'use strict';

QUnit.module('Spy Example', {
    beforeEach: function () {
        console.group('Spy Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

// Example of wrapping a spy around a method
QUnit.test('callDependency called with spy and spy reports that it is called and check return value', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 10
    ,   sut = appObject;

     sinon.spy(theDependency, 'someMethod');

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    sut.callDependency();

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.ok(theDependency.someMethod.called, 'Callback was called.');
    assert.ok(theDependency.someMethod.returned(expected), theDependency.someMethod.returnValues[0] + ' should equal ' + expected);   
    theDependency.someMethod.restore();
});

QUnit.test('callParameterInjectedDependency - called with spy and spy reports that it is called and check return value', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var expected = 10
        , sut = appObject
        , spy;

    spy = sinon.spy(theDependency, 'someMethod');

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    sut.callParameterInjectedDependency(theDependency);

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.ok(spy.called, 'Callback was called.');
    assert.ok(spy.returned(expected), spy.returnValues[0] + ' should equal ' + expected);
    theDependency.someMethod.restore();
});
