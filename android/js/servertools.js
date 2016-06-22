var ph_baseUrl = "http://192.168.22.17:17701/";

function ph_getUrl(url) {
	var request = new XMLHttpRequest();
	request.open('GET', url, false);
	request.send(null);
	if (request.status === 200) {
		console.log(request.responseText);
	}
}


function ph_sendCmd(cmd) {
	var url = ph_baseUrl+"/cmd?";
	var q = [];
	for (var key in cmd) {
		q.push(key + "=" + encodeURIComponent(cmd[key]));
	}
	loadUrl(url + q.join("&"));
	console.info(cmd);
}

var ServerTools = {
	sleep: function(ms) {
		document.title = "sleep:"+ms;
		ph_sendCmd({cmd:"sleep",time:ms});
	},
	click:function(x,y,msg) {
		document.title = "Click:"+msg;
		ph_sendCmd({cmd:"click",x:x,y:y});
	},
	runPackage:function(name) {
		ph_sendCmd({cmd:"runpackage",name:name});
	},
	execShellCmd:function(cmd) {
		ph_sendCmd({cmd:"shellcmd",shellcmd:cmd});
	},
	openUrl:function(url) {
		ph_sendCmd({cmd:'openUrl',url:url});
	},
	exit:function(success) {
		ph_sendCmd({cmd:'exit',success:success});
	}
}