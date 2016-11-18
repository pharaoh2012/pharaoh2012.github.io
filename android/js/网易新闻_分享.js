runPackage("com.netease.newsreader.activity", 15000);

click(163, 149, "点击重庆", 10000);
click(181, 849, "第二条新闻", 15000);

for (var i = 0; i < 3; i++) {
	click(671, 1232, "分享按钮", 2000);

	//click(573, 521, "QQ空间"); 
	click(140,766,"QQ好友",5000);
	QQShare();
	//QQZone();
	sleep(2000,true);
	if (checkColors("490,799,186,549,556,795,417,489", "-1343874,-2789404,-1276538,-73381")) {

		click(501, 806, "激动拆开", 2000);
		takePicture("网易新闻_分享.png");
		sleep(7000);
	}

}