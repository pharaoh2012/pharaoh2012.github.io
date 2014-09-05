(function() {
    function clickObj(o) {
    	console.info("clickObj:",o)
        var e = document.createEvent('MouseEvent');
        e.initEvent('click', false, false);
        o.dispatchEvent(e);
    }


    if (location.pathname == "/") {
        clickObj(document.querySelector('div.sign'));
    }
})();
