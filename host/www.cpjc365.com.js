function pharaoh_init() {
    if (window.location.href.indexOf('advertise') >= 0) {
        adexper();
        return;
    }

    if (window.location.href.indexOf('WebSiteID') >= 0) {
        console.info("getLastIndex", getLastIndex());
        document.title = getLastIndex();
        setTimeout(function() {
            WebSIte();
        }, 5000);

        return;
    }
    console.info(window.location.href);
}

pharaoh_init();

function adexper() {
    var index = getLastIndex();
    var links = document.querySelectorAll(".ad_llgg a");
    if (index >= links.length) {
        document.title = "end";
        return;
    }
    window.location.href = links[index].href;
}

function getLastIndex() {
    var time = localStorage.getItem('time') || 0;
    var now = (+new Date());
    if (now - time > 3600000) {
        return 0;
    } else {
        return parseInt(localStorage.getItem("lastIndex"), 10);
    }
}


function WebSIte() {
    console.info("WebSIte");
    if (document.getElementById('viewInfo').style.display == 'none') {
        localStorage["lastIndex"] = getLastIndex() + 1;
        localStorage['time'] = (+new Date());
        window.location.href = "http://www.cpjc365.com/winbeans/advertise?type=llgg";
    } else {
        setTimeout(function() {
            WebSIte();
        }, 1000);
    }
}
