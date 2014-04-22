(function() {
    function clickObj(o) {
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

    if (location.href.indexOf('login.jhtml') >= 0) {
        var username = pharaoh_get("username");
        var password = pharaoh_get("password");
        if (username && password) {
            document.getElementById('TPL_username_1').value = username;
            document.getElementById('TPL_password_1').value = password;
            //clickObj(document.getElementById('login_button'));
            return;
        }
        console.info('username or password is null');

    }
})();
