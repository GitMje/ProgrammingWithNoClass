'use strict';

QUnit.module('DOM', {
    beforeEach: function () {
        console.group('DOM Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('displayErrors - when called will append error to firstName', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var fixture = $( '#qunit-fixture' )
    ,   result;
    
    fixture.append( '<input type="text" class="myInput" id="firstName">' );

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    displayErrors();
    result = $('input', fixture).hasClass('myInput error');

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.ok( result, 'displayErrors should add error to myInput' );
});
