/// <reference path='../lib/jquery-1.7.2.js' />
/// <reference path='../lib/qunit.js' />
/// <reference path='../lib/sinon-1.12.1.js' />
/// <reference path='../lib/sinon-ie-1.12.1.js' />
/// <reference path='../lib/sinon-qunit-1.0.0.js' />
/// <reference path='../src/Kryptonite.js' />
/// <reference path='dummyKryptonite.js' />
'use strict';

QUnit.module('Dummy/Fake MockJax example', {
    beforeEach: function () {
        console.group('Dummy Group');
        console.log('Start beforeEach...');
    },
    afterEach: function () {
        console.log('...afterEach finished.');
        console.groupEnd();
    }
});

QUnit.test('getFromAjax - Should send an ajax request', function (assert) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ARRANGE
     var fakeXhr = sinon.useFakeXMLHttpRequest()
    ,   mockUrl = '/an/ajax/resource'
    ,   requests
    ,   sut,
    successCallback = function successCallback() {
        assert.ok(true, 'Should call successCallback');
    },
    errorCallback = function errorCallback() {
        assert.ok(false, 'Should not call errorCallback');
    };

    sinon.requests = [];
    requests = sinon.requests;


    fakeXhr.onCreate = function (xhr) {
        requests.push(xhr);
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ACT
    sut = kryptonite();
    sut.getFromAjax(mockUrl, successCallback, errorCallback);

    sinon.requests[0].respond(200, { 'Content-Type': 'application/json' },
                                 '[{ "id": 10, "comment": "Hello World" }]');

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ASSERT 
    assert.strictEqual(requests.length, 1, 'A request should exist');
    assert.strictEqual(sinon.requests[0].url, mockUrl, 'The URI should be correct');
    fakeXhr.restore();
});

QUnit.test('getFromAjax - Simulate 500 error should call error callback', function (assert) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var fakeXhr = sinon.useFakeXMLHttpRequest()
    ,   mockUrl = '/an/ajax/resource'
    ,   requests
    ,   sut,
    successCallback = function successCallback() {
        assert.ok(false, 'Should not call successCallback');
    },
    errorCallback = function errorCallback() {
        assert.ok(true, 'Should call errorCallback');
    };
    sinon.requests = [];
    requests = sinon.requests;

    fakeXhr.onCreate = function (xhr) {
        requests.push(xhr);
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ACT
    sut = kryptonite();
    sut.getFromAjax(mockUrl, successCallback, errorCallback);

    sinon.requests[0].respond(
        500,
        {
            'Content-Type': 'text/plain',
            'Content-Length': 22
        },
        'Internal Server Error!'
    );

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ASSERT 
    assert.strictEqual(requests.length, 1, 'A request should exist');
    assert.strictEqual(sinon.requests[0].url, mockUrl, 'The URI should be correct');
    fakeXhr.restore();
});

QUnit.test('getRandomKryptonite - Call with a successful callback should set color and affect', function (assert) {
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ARRANGE
    var fakeXhr = sinon.useFakeXMLHttpRequest()
    ,   requests
    ,   sut;
    
    sinon.requests = [];
    requests = sinon.requests;

    fakeXhr.onCreate = function (xhr) {
        requests.push(xhr);
    };

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ACT
    sut = kryptonite();
    sut.getRandomKryptonite();

    sinon.requests[0].respond(
        200, 
        { 'Content-Type': 'application/json' },
        JSON.stringify(dummyBlueKryptoniteStone));

    ///////////////////////////////////////////////////////////////////////////////////////////////////
    // ASSERT 
    assert.strictEqual(requests.length, 1, 'A request should exist');
    assert.strictEqual(sinon.requests[0].url, '/Home/GetRandomKryptoniteStoneTypeVm', 'The URI should be correct');
    assert.strictEqual(sut.getColor(), 'Blue', 'Color should be correctly set');
    assert.strictEqual(sut.getAffect(), 'Only affects Bizarro in the same way that Green affects Superman','Affect should be correctly set');
    fakeXhr.restore();
});

