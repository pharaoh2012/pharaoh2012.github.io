(function() {

    var aDownload = document.getElementById("download");
    if (aDownload) {
        var href = aDownload.href;
        var html = `  <span style="color:blue;cursor:pointer;text-decoration:underline" onclick="DownloadRemote('${href}')">  远程下载 </sapn> `;
        aDownload.insertAdjacentHTML("afterEnd", html);
    }

})();

function DownloadRemote(url) {

    var datas = `[{
        "jsonrpc": "2.0",
        "method": "aria2.addUri",
        "id": 1,
        "params": ["token:abcd1234", ["${url}"], {}]
    }]`;
    var urlServer = "http://pharaoh2012-na.daoapp.io/jsonrpc?tm=1476340583479";
    postUrl(urlServer, datas, function(ret) {
        console.info(ret);
        alert("添加下载成功！");

    });
}

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

function postUrl(url, data, callback) {
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
    xmlhttp.open("POST", url, true);
    xmlhttp.send(data);
}