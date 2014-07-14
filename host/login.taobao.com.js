(function() {
    function clickObj(o) {
        if(!o) return;
        var e = document.createEvent('MouseEvent');
        e.initEvent('click', false, false);
        o.dispatchEvent(e);
    }

    function pharaoh_get(name) {
        var v;
        var cfg = localStorage.getItem('pharaohconfig');
        if (cfg) {
            cfg = JSON.parse(cfg);
            v = cfg[name];
            if (v) return v;
        } else {
            cfg = {};
        }
        v = prompt(name);
        if (v) {
            cfg[name] = v;
            cfg = JSON.stringify(cfg);
            localStorage.setItem('pharaohconfig', cfg);
            return v;
        }
        return null;

    }

    function trysetvalue(id, value) {
        var o = document.getElementById(id);
        if (o) {
            o.vlaue = value;
            return true;
        }
        return false;

    }

    if (location.href.indexOf('login.jhtml') >= 0) {
        var username = pharaoh_get("username");
        var password = pharaoh_get("password");
        if (username && password) {
            trysetvalue('TPL_username_1',username);
            trysetvalue('TPL_password_1',password);
            trysetvalue('J_PwdV',password);
            //clickObj(document.getElementById('login_button'));
            clickObj(document.getElementById('J_VerifySubmit'));
            
            return;
        }
        console.info('username or password is null');

    }
})();
