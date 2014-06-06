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

    if (location.href.indexOf('ulogin.asp') >= 0) {
        var username = pharaoh_get("username");
        var password = pharaoh_get("password");
        if (username && password) {
            document.getElementsByName('LoginName')[0].value = username;
            document.getElementById('LoginPwd').value = password;
            document.getElementById('log_but').click();
            return;
        }
        console.info('username or password is null');

    }
    else {
        $('#chkBut').click();
        setInterval(function() {
            var btn = $('.newButton');
            btn.click();
        }, 5000);

//http://www.2478.com/qupai/
        $('#buy0').show();
        $("input[name='numCount']").val(1);
        $("#buy0").submit();
    }
})();


