(function() {
    function clickObj(o) {
        var e = document.createEvent('MouseEvent');
        e.initEvent('click', false, false);
        o.dispatchEvent(e);
    }

    var btn = document.getElementById('sub');
    if(btn) clickObj(btn);

})();
