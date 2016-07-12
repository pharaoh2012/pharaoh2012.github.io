
runPackage("com.netease.newsreader.activity", 15000);

click(163, 149, "点击重庆", 10000);
click(181, 849, "第二条新闻", 15000);

for (var i = 0; i < 3; i++) {
	click(671, 1232, "分享按钮", 2000);
	click(573, 521, "QQ空间");
	QQZone();
	sleep(5000);
}