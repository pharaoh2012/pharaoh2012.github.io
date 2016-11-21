
//miui的安全提示窗口

G_ClassNames["com.miui.safepay.ui.t"] = function() {
	// 关闭miui的安全提示窗口
	var r = AndroidNode.ClickByText("仍然支付");
	ServerTools.toast("关闭miui的安全提示窗口:" + r);
}