QUnit.module('Var Example', {
    beforeEach: function () {
        'use strict';
        console.group('Var Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        'use strict';
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('Var Function Scope Example', function (assert) {
    ////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    //'use strict';
    myGlob = 16;
    console.log('Things = ' + Things);
    console.log('i = ' + i);
    //console.log('does not exist = ' + doesNotExist);

    ////////////////////////////////////////////////////////////////////////////
    // ACT
    var Things = ['thing 1', 'thing 2'];
    for (var i = Things.length - 1; i >= 0; i--) {
        Things[i] = 'x';
    }

    ////////////////////////////////////////////////////////////////////////////
    // ASSERT
    assert.ok(true, 'Always true');
});
