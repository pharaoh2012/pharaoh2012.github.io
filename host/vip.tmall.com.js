(function() {

    function getUrl(url, callback) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
                if (callback) {
                    callback(xmlhttp.responseText);
                } else {
                    console.info(xmlhttp.responseText);
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send(null);
    }

    if (location.pathname == '/') {

        var href = document.querySelector('a.j_isGuess').href;
        if (href) {
            console.info("auto:", href);
            var thref = "http://pytaobao.jd-app.com/source?url=" + encodeURIComponent(href) + "&encode=gbk";
            getUrl(thref, function(d) {
                //console.info(d);
                var indexend = d.indexOf('</title>');
                d = d.substr(0, indexend);
                //console.info(d);
                var indexbg = d.indexOf('<title>');
                d = d.substr(indexbg + 7);

                var title = d.replace(/\s/g, '').toLowerCase();
                console.info("title:", title);
                document.title = title;
                var boxs = document.querySelectorAll('div.optionsArea .optionBox');
                for (var i = boxs.length - 1; i >= 0; i--) {
                    if (title.indexOf(boxs[i].innerText.toLowerCase()) >= 0) {
                        boxs[i].style.color = 'red';
                    }
                }
            });
        }



        // document.querySelector('.answerArea').onclick = function() {
        //     var ans = window.prompt("输入答案");
        //     if (!ans) return;
        //     var boxs = document.querySelectorAll('div.optionsArea .optionBox');
        //     for (var i = boxs.length - 1; i >= 0; i--) {
        //         if (ans.indexOf(boxs[i].innerText) >= 0) {
        //             boxs[i].style.color = 'red';
        //         }
        //     }
        // };

    }
})();
