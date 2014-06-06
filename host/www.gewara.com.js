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

    if (location.href.indexOf('personIndex.xhtml') >= 0) {
        if (document.getElementById('my_gift')) {
            location.href = "/everday/acct/mygift.xhtml";
        }
    }
    if (location.href.indexOf('mygift.xhtml') >= 0) {
        showBrtDiv();
        document.getElementById('say_area').value = "微博控特权红包";
        clickGetPoint('point', 'brt');
    }
})();
