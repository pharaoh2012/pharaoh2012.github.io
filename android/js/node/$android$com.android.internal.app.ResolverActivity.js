//选择小号窗口

var jsName = ServerTools.getJsName();
if(jsName.indexOf("#2")>0) {
	ServerTools.toast("选择点击小号");
	ServerTools.click(489,961);
} else {
	ServerTools.toast("选择点击大号");
	ServerTools.click(229, 963);
}

