G_ClassNames["android.widget.LinearLayout"] = function() {
	// 关闭miui的安全提示窗口
	var r = AndroidNode.ClickById("com.cqmc.client:id/pop_cancel");
	ServerTools.toast("关闭广告 :" + r);
};

G_ClassNames["com.cqmc.client.SubPageActivity"] = function() {
	// 掌上取金窗口
	toast("等待10s领取金币");
	sleep(10000,true);
	click(357,618,"领金币",5000);
	exit();
};