
(function() {
    function clickObj(o) {
        var e = document.createEvent('MouseEvent');
        e.initEvent('click', false, false);
        o.dispatchEvent(e);
    }

    $('.btn_signIn').click();
    document.title = "auto sign in js";
})();
