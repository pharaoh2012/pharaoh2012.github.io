var G_jsName = "//jsname//";

function G_Running() {
	ServerTools.toast("***开始运行：" + G_jsName);
	//jscode//

	toast("准备退出：" + G_jsName, 1);
	sleep(10000, true);
	ServerTools.exit(G_jsName);
	ServerTools.toast("退出app:" + G_jsName, 1);
	
	killAllApp();
	ServerTools.toast("***结束运行：" + G_jsName);
}



function copyText(txt) {
	ServerTools.copyText(txt);
}

function sleep(ms, notShowMsg) {
	if (!notShowMsg) {
		if (ms > 1000) toast("sleep:" + ms / 1000 + " s");
	}
	ServerTools.sleep(ms);

}

function click(x, y, msg, ms) {
	if (msg) {
		toast("click:" + msg);
	}
	ServerTools.click(x, y, msg);
	if (ms) {
		sleep(ms);
	}
}

function takePicture(fn) {
	//fn :  aaa.png
	ServerTools.takePicture(fn);
}

function toast(msg, time) {
	ServerTools.toast(msg, time ? 0 : 1);
}

function log(msg) {
	ServerTools.log(msg);
}

function execShellCmd(cmd) {
	ServerTools.execShellCmd(cmd);
}

function inputKey(key) {
	execShellCmd("input keyevent " + key);
}

function back(num) {
	if(num ==1) {
		toast("返回");
	}
	else {
		toast("返回"+num+"次");
	}
	if (num) ServerTools.back(num);
	else ServerTools.back(1);
}

function openUrl(url) {
	ServerTools.openUrl(url);
}

function goHome() {
	inputKey(3);
}

function runPackage(name, ms) {
	ServerTools.runPackage(name);
	if (ms) {
		ServerTools.sleep(ms);
	}

}

function exit(success) {
	//ServerTools.exit(success);
}

G_Running();


function QQShare() { //QQ好友
	toast("等待QQ启动", 1);
	sleep(10000, true);
	click(65, 437, "点击我的电脑", 5000);
	click(503,835,"发送按钮",8000);
	click(198,765,"返回APP",5000);    
}

function QQZone() { //QQ空间
	toast("等待QQ启动", 1);
	sleep(10000, true);
	click(649, 98, "点击发表按钮", 5000);
}

function killAllApp() {
	toast("清理内存",1);
	sleep(5000, true);
	inputKey(3);
	sleep(1000, true);
	inputKey(82);
	sleep(2000, true);
	ServerTools.click(357, 1137, ""); //清理内存
	sleep(2000, true);	
}