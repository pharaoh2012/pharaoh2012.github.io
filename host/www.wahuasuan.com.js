(function() {
    function clickObj(o) {
        var e = document.createEvent('MouseEvent');
        e.initEvent('click', false, false);
        o.dispatchEvent(e);
    }


    if (location.href.indexOf('/item.htm') >= 0) {
        clickObj(document.querySelector('div.sign'));
    }
})();
