function js(fileUrl) {
    console.info("get url:" + fileUrl);
    getUrl(fileUrl, urlcontent);
}

function getUrl(url, fn) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    console.debug("getUrl:", url);
    req.onreadystatechange = function() {
        if ((req.readyState == 4) && (req.status == 200)) {
            if (fn) fn(req.responseText, url);
        }
    };
    req.send(null);
}

function HTMLDecode(txt) {
    var temp = document.createElement("div");
    temp.innerHTML = txt;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}

function urlcontent(data, url) {
    var index = data.indexOf('id="J_BrandAttr"');
    if (index > 0) {
        data = data.substr(index);
        index = data.indexOf('<div id="mall-banner">');
        if (index > 0) {
            data = data.substr(0, index);
        }
    }

    data = data.replace(/<.+?>/mg, '\n');

    taobaotext = HTMLDecode(data);
    console.info(taobaotext);
    var propertys = taobaotext.split('\n');
    proprty = document.getElementById('J_Question').getElementsByTagName('em')[0].innerText;
    var result = '';
    for (var i = 0; i < propertys.length; i++) {
        if (propertys[i].indexOf(proprty) >= 0) {
            result = propertys[i];
            break;
        }
    }
    if (result) {
        document.title = 'end';
        result = result.split(':')[1].replace(/ /g, '');
        if (result) {
            setAnswer(result);
        } else {
            document.title = "error find answer!";
            console.info(data);
            return;
        }
    } else {
        window.trycount++;
        document.title = 'not find:' + window.trycount;
        console.info(data);
        if (window.trycount > 5) {
            document.title = 'not find:End';
            return;
        }
        setTimeout(function() {
            js(window.taobaoTryUrl);
        }, 1000);


    }

}

function setAnswer(answer) {
    document.getElementById('J_AnswerInput').value = answer;
    document.getElementById('J_Answer').getElementsByTagName('a')[0].click();
    setTimeout(function() {
        var msgdiv = document.querySelector("div.t1");
        if (msgdiv) {
            if (msgdiv.innerText.indexOf('次数已经达到上限') > 0) {
                alert('达到上限！');
                return;
            }
        }
        var classnames = ['try-detail-buy', 'try-btn-submit'];
        for (var i = classnames.length - 1; i >= 0; i--) {
            var btn = document.getElementsByClassName(classnames[i]);
            if (btn.length > 0) {
                btn[0].click();
                return;
            }
        }
    }, 5000);
}

tryisok = false;
tryneedlogin = false;

if (window.location.host == "favorite.taobao.com") {
    document.title = 'favorite';
    document.getElementById("PopupFavorForm").submit();

} else if (window.location.host == "try.taobao.com") {

    setInterval(function() {
        if (tryisok) return;
        var r = document.querySelector("p.fy-bigtext");
        if (r && r.innerText.indexOf("成功申请") > 0) {
            tryisok = true;
            var rid = /id=(\d+)/.exec(location.search);
            if (rid) {
                var id = rid[1];
                document.title = "OK:" + id;
                console.info("申请试用成功:" + id);
                getUrl('http://pytaobao.jd-app.com/taobao/ok/' + id);
                setTimeout(function() {
                    console.info('do close......');
                    document.title = "do close";
                    window.close();
                }, 5000);
            }
        }
    }, 3000);

    setInterval(function() {
        if (tryneedlogin) return;
        if (document.querySelector(".try-login-iframe")) {
            tryneedlogin = true;
            alert("need login");
        }
    }, 2000);

    setTimeout(function() {
        document.title = 'begin load';

        if (document.getElementById('J_Question').getElementsByTagName('em')[0].innerText == "试用品申请成功后需提交") {
            setAnswer("报告");
        } else {
            var taobaohref = encodeURIComponent(document.getElementById('J_Question').getElementsByTagName('a')[0].href);
            //js("http://127.0.0.1:7702/taobao/item?url=" + taobaohref);
            window.taobaoTryUrl = "http://pytaobao.jd-app.com/source?encode=gb2312&url=" + taobaohref;
            window.trycount = 0;
            js(window.taobaoTryUrl);
        }

        var msg = {
            "url": document.getElementById("J_Favorite").getElementsByTagName('a')[0].href,
        };
        // chrome.runtime.sendMessage(msg, function(response) {
        //     console.log(response);
        // });

        //console.info("open:", document.getElementById("J_Favorite").getElementsByTagName('a')[0].href);
        //open(document.getElementById("J_Favorite").getElementsByTagName('a')[0].href);
    }, 1000);
}
