//百度知道
runPackage("com.baidu.iknow", 15000);


click(222, 1221, "团队", 10000);


for (var i = 0; i < 3; i++) {
	click(631, 365, "点击团队", 15000);
	click(581, 101, "打卡按钮", 15000);
	click(354, 524, "我要打卡", 5000);
	takePicture();
	back(2);
	sleep(2000);
}