'use strict';

var Acme = {ns1: {}};

QUnit.module('Global Host Objects', {
    beforeEach: function () {
        console.group('Global Host Objects Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('redirect - redirects to the correct page', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var sut = Acme.myObject()
    ,   expected = 'http://localhost:9999/myPath?name=Groot';

    sut.setMyVar1('Groot');

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    sut.redirect();
    
    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.strictEqual(window.location.href, expected, 'Results in the correct redirection value');
});