(function (app) {
    
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

            if (window.location.href.indexOf('&dest=') !== -1) {
                var loc = window.location.href.substr(window.location.href.indexOf('&dest=') + 6);
                if (loc.indexOf('myApp.aspx') != -1)
                    loc = '/home.aspx';
                window.location.href = window.location.protocol + '//' + window.location.host + loc;
            }
            else {
                var aQueryString = '?';
                if (myVar1 !== '') {
                    aQueryString += 'name=' + myVar1;
                }
                if (myVar2 !== '') {
                    aQueryString += '&' + 'productId=' + myVar2;
                }

                var relativeUrl = window.location.pathname + aQueryString;
                gotoRelativeUrl(relativeUrl);
            }
        },

        gotoRelativeUrl = function gotoRelativeUrl(relUrl) {
            if (relUrl.charAt(0) == '/') {
                relUrl = relUrl.substr(1, relUrl.length);
            }

            window.location.href = window.location.protocol + '//' + window.location.host + '/' + relUrl;
        },
        
        api = {
            setMyVar1 : setMyVar1,
            setMyVar2 : setMyVar2,
            redirect : redirect,
        };

        return api;
    };
} (Acme));