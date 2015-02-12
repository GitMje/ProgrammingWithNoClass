(function (app, global) {
    
    app.myObject = function() {
        var myVar1 = '',
            myVar2 = '',    

        setMyVar1 = function(value) {
            myVar1 = value;
        },

        setMyVar2 = function(value) {
            myVar2 = value;
        },

        redirect = function redirect() {
            if (Acme.ns1.obj1 && Acme.ns1.obj1.isPostCondition()) {
                myVar1 = 'viewcart';
            }

            if (Acme.ns1.obj2 && Acme.ns1.obj2.shouldRedirectToMyPage) {
                gotoRelativeUrl('my-page.aspx');
                return;
            }

            if (Acme.ns1.obj3 && Acme.ns1.obj3.subObj4.shouldRedirectToMyPage) {
                gotoRelativeUrl('my-page.aspx');
                return;
            }

            if (global.location.href.indexOf('&dest=') !== -1) {
                var loc = global.location.href.substr(global.location.href.indexOf('&dest=') + 6);
                if (loc.indexOf('app.aspx') != -1)
                    loc = '/home.aspx';
                global.location.href = global.location.protocol + '//' + global.location.host + loc;
            }
            else {
                var aQueryString = '?';
                if (myVar1 !== '') {
                    aQueryString += 'name=' + myVar1;
                }
                if (myVar2 !== '') {
                    aQueryString += '&' + 'productId=' + myVar2;
                }

                var relativeUrl = global.location.pathname + aQueryString;
                gotoRelativeUrl(relativeUrl);
            }
        },

        gotoRelativeUrl = function gotoRelativeUrl(relUrl) {
            if (relUrl.charAt(0) == '/') {
                relUrl = relUrl.substr(1, relUrl.length);
            }

            global.location.href = global.location.protocol + '//' + global.location.host + '/' + relUrl;
        },
        
        api = {
            setMyVar1 : setMyVar1,
            setMyVar2 : setMyVar2,
            redirect : redirect,
        };

        return api;
    };
} (Acme, typeof global !== 'undefined' ? global : window));