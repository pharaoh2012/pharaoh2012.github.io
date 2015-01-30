//qm.pceggs.com/Web/ADQuestion.aspx?ADID=1341
var fmhref = top.frames['bottomFrame'].location.href;
var fmwin = top.frames['bottomFrame'];

function savetostorg() {
    var qid = top.frames['bottomFrame'].document.querySelector("#input_QID").value;
    var mid = top.frames['bottomFrame'].document.querySelector("#input_MID").value;
    var now = new Date();
    var today = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    var id = qid + "_" + mid; // + "_" + today;
    var v = {};
    for (var i = 1; i < 5; i++) {
        d = fmwin.document.getElementById('asw' + i);
        v[d.value] = d.checked;
    }
    localStorage.setItem(id, JSON.stringify(v));
}



if (fmhref.indexOf('ADQuestion.aspx') > 0) {
    var qid = top.frames['bottomFrame'].document.querySelector("#input_QID").value;
    var mid = top.frames['bottomFrame'].document.querySelector("#input_MID").value;
    var id = qid + "_" + mid;
    var ans = localStorage.getItem(id);
    if (ans) {
        document.title = "10s开始自动答题,0取消";
        console.info("10s开始自动答题,0取消");
        window.autoAnswer = true;
        ans = JSON.parse(ans);
        var canclick = false;
        for (var i = 1; i < 5; i++) {
            d = fmwin.document.getElementById('asw' + i);
            d.checked = ans[d.value];
            canclick = canclick || ans[d.value];
        }
        document.title = "10s开始自动提交,0取消";
        console.info("10s开始自动提交,0取消");
        setTimeout(function() {
            if (!window.autoAnswer) {
                document.title = "取消自动答题.";
                return;
            }
            if (canclick) {
                console.info("提交答题...");
                fmwin.btnt.click();
            } else {
                console.info('not can click');
                document.title = "答案错误";
            }

        }, 10000);
    } else {
        console.info("没有找到答案");
        document.title = "没有找到答案";
    }


    top.frames['bottomFrame'].document.onkeydown = function(e) {
        var key = e.which;
        if (key == 13) {
            savetostorg();
            fmwin.btnt.click();
            return;
        }
        if (key >= 96) key -= 48;
        key -= 48;
        if (key == 0) { //全选
            window.autoAnswer = false;
            // for (var i = 4; i >= 1; i--) {
            //     var d = fmwin.document.getElementById('asw' + i);
            //     d.checked = true;
            //     return;
            // }
        }
        if ((key >= 5) || (key <= 0)) return;
        var d = fmwin.document.getElementById('asw' + key);
        d.checked = !d.checked;
    };
}

function _rrrrr(argument) {
    if ((fmhref.indexOf('ADQuestionR.aspx') > 0) || (fmhref.indexOf('ADQuestionG.aspx') > 0) || mhref.indexOf("ADQuestionW.aspx")>0) {
        var aa = top.frames['bottomFrame'].document.querySelectorAll("a");
        for (var i = aa.length - 1; i >= 0; i--) {
            console.info(aa[i].href);
            if (aa[i].href.indexOf('ADQuestion.aspx') >= 0) {
                top.frames['bottomFrame'].location.href = aa[i].href;
                aa[i].click();
                return;
            }
        }
    }
}

_rrrrr();
