'use strict';

var Acme = {ns1: {}};

var global = {
    location : {
        href : 'http://localhost:9999',
        protocol : 'http:',
        host : 'localhost:9999',
        port : '9999',
        pathname : '/myPath'
    }
};


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

function basicSetup() {
}

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
    assert.strictEqual(global.location.href, expected, global.location.href + ' should equal ' + expected);
});
