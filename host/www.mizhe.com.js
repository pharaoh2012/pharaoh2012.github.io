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
            console.info('set element value:',id);
            o.value = value;
            return true;
        }
        return false;

    }

    if (location.href.indexOf('login.html') >= 0) {
        location.href = "http://www.mizhe.com/openid/taobao/top.html";
        return;
    }
    if(location.pathname=='/') {
        location.href = "http://www.mizhe.com/checkin.html";
        return;
    }
    if(location.pathname=='/checkin.html') {
        clickObj(document.getElementById('signin'));
        return;
    }


})();
