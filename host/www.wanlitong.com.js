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

    if (location.href.indexOf('login.do') >= 0) {
        var username = pharaoh_get("username");
        var password = pharaoh_get("password");
        if (username && password) {
            document.getElementById('j_username').value = username;
            document.getElementById('j_password').value = password;
            clickObj(document.getElementById('login_button'));
            return;
        }
        console.info('username or password is null');

    }
})();
