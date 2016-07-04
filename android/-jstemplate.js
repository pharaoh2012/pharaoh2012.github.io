
var G_jsName = "//jsname//";

function G_Running() {
	ServerTools.toast("***开始运行："+G_jsName);
	//jscode//

	sleep(10000);
	ServerTools.exit(G_jsName);
	ServerTools.toast("脚本运行完成.");
	sleep(5000);
	inputKey(3);
	sleep(1000);
	inputKey(82);
	sleep(2000);
	ServerTools.click(357, 1137, "清理内存");
	sleep(2000);
	ServerTools.toast("***结束运行："+G_jsName);
}

function copyText(txt) {
	ServerTools.copyText(txt);
}

function sleep(ms) {	
	ServerTools.sleep(ms);
}

function click(x, y, msg, ms) {
	ServerTools.click(x, y, msg);
	if (ms) {
		sleep(ms);
	}
}

function execShellCmd(cmd) {
	ServerTools.execShellCmd(cmd);
}

function inputKey(key) {
	execShellCmd("input keyevent " + key);
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

