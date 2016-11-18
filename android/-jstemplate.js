var G_jsName = "//jsname//";
var G_isRunning = true;
var G_packageName;
var G_exitApp = true;

function G_Running() {
	ServerTools.toast("***开始运行：" + G_jsName);
	var names = G_jsName.split("#");
	if(names.length>1) {
		ServerTools.putUserData("小号",names[1]);
	}
	else {
		ServerTools.putUserData("小号","0");
	}
	//jscode//

	toast("准备退出.");
	if (!G_isRunning) {
		toast("非主动退出！exit");
		return;
	}

	if (G_exitApp) {
		sleep(10000, true);

		ServerTools.exit(G_jsName);
		ServerTools.toast("退出app:" + G_jsName, 1);

		//killAllApp();
		killCurrentApp();
		ServerTools.toast("***结束运行：" + G_jsName);
	} else {
		ServerTools.toast("结束运行，但不退出。" + G_jsName);
	}
}

function takePicture() {
	ServerTools.takeCurPicture(G_jsName);
}

function swipe(x, y, x1, y1) {
	execShellCmd("input swipe " + x + " " + y + " " + x1 + " " + y1);
}

function copyText(txt) {
	ServerTools.copyText(txt);
}

function sleep(ms, notShowMsg) {
	if (!G_isRunning) {
		toast("非主动退出！sleep");
		return;
	}
	if (!notShowMsg) {
		if (ms > 2000) toast("sleep:" + ms / 1000 + " s");
	}
	if (!ServerTools.sleep(ms)) {
		G_isRunning = false;
	}

}

function click(x, y, msg, ms) {
	if (!G_isRunning) {
		toast("非主动退出！click");
		return;
	}
	if (msg) {
		if (ms) {
			toast("click:" + msg + " " + ms / 1000 + "s");
		} else {
			toast("click:" + msg);
		}
	}
	if (!ServerTools.click(x, y, msg)) {
		G_isRunning = false;
		return;
	}
	if (ms) {
		sleep(ms, true);
	}
}

function checkColors(xys, colors) {
	return ServerTools.checkColors(xys, colors);
}

function toast(msg, time) {
	ServerTools.toast(G_jsName + "：" + msg, time ? 0 : 1);
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
	if (!num) num = 1;
	if (num == 1) {
		toast("返回");
	} else {
		toast("返回" + num + "次");
	}
	ServerTools.back(num);
}

function openUrl(url) {
	ServerTools.openUrl(url);
}

function goHome() {
	inputKey(3);
}

function runPackage(name, ms, noback) {
	G_packageName = name;
	ServerTools.runPackage(name);

	if (ms) {
		toast("运行：" + name + "  sleep:" + (ms / 1000) + " s");
		ServerTools.sleep(ms);
		if (!noback) {
			back();
			ServerTools.sleep(2000);
		}
	}

}

function exit(success) {
	//ServerTools.exit(success);
}

G_Running();


function QQShare() { //QQ好友
	toast("等待QQ启动,10s", 1);
	sleep(10000, true);
	click(65, 437, "点击我的电脑", 5000);
	click(503, 835, "发送按钮", 8000);
	click(198, 765, "返回APP", 5000);
}

function QQZone() { //QQ空间
	toast("等待QQ启动,10s", 1);
	sleep(10000, true);
	click(649, 98, "点击发表按钮", 5000);
}

function WeiXinFriends() { //微信朋友圈
	toast("等待微信启动,10s", 1);
	sleep(10000, true);
	click(649, 98, "点击发送按钮", 5000);
}

function WeiXinFriend() { //微信朋友圈
	toast("等待微信启动,10s", 1);
	sleep(10000, true);
	click(224, 474, "第一个好友", 5000);
	click(541, 887, "分享按钮", 5000);
	click(474, 759, "返回APP", 5000);
}


function killAllApp() {
	toast("清理内存", 1);
	sleep(5000, true);
	inputKey(3);
	sleep(1000, true);
	inputKey(82);
	sleep(2000, true);
	ServerTools.click(357, 1137, ""); //清理内存
	sleep(2000, true);
}

function killCurrentApp() {
	if (G_packageName) {
		execShellCmd("am force-stop " + G_packageName);
	}
}