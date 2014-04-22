//qm.pceggs.com/Web/ADQuestion.aspx?ADID=1341
var fmhref = top.frames['bottomFrame'].location.href;
var fmwin = top.frames['bottomFrame'];
if (fmhref.indexOf('ADQuestion.aspx') > 0) {
    top.frames['bottomFrame'].document.onkeydown = function(e) {
        var key = e.which;
        if (key == 13) {
            console.info(13);
            fmwin.btnt.click();
            return;
        }
        if (key >= 97) key -= 48;
        key -= 48;
        if (key == 0) { //全选
            for (var i = 4; i >= 1; i--) {
                var d = fmwin.document.getElementById('asw' + i);
                d.checked = true;
                return;
            }
        }
        if ((key >= 5) || (key <= 0)) return;
        var d = fmwin.document.getElementById('asw' + key);
        d.checked = !d.checked;
    };
}

if ((fmhref.indexOf('ADQuestionR.aspx') > 0) || (fmhref.indexOf('ADQuestionG.aspx') > 0)) {
    var aa = top.frames['bottomFrame'].document.querySelectorAll("a");
    for (var i = aa.length - 1; i >= 0; i--) {
        console.info(aa[i].href);
        if (aa[i].href.indexOf('ADQuestion.aspx') >= 0) {
            aa[i].click();
            return;
        }
    }
}
