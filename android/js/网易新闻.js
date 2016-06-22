

ServerTools.runPackage("com.netease.newsreader.activity");
ServerTools.sleep(10000);
ServerTools.click(163,149,"点击重庆");
ServerTools.sleep(10000);
ServerTools.click(181,849,"第二条新闻");
ServerTools.sleep(15000);

ServerTools.click(671,1232,"分享按钮");
ServerTools.sleep(2000);

ServerTools.click(577,679,"邮箱");
ServerTools.sleep(10000);
ServerTools.execShellCmd("input keyevent 4");
ServerTools.sleep(1000);
ServerTools.execShellCmd("input keyevent 4");
ServerTools.sleep(3000);
ServerTools.click(138,1235,"写跟帖");
ServerTools.sleep(1000);
ServerTools.execShellCmd("input text ...");
ServerTools.sleep(1000);
ServerTools.click(665,694,"发送按钮");
ServerTools.sleep(10000);
ServerTools.execShellCmd("input keyevent 4");
ServerTools.sleep(3000);

ServerTools.click(218,1238,"阅读");
ServerTools.sleep(10000);
ServerTools.click(261,86,"我的订阅");
ServerTools.sleep(10000);
ServerTools.click(286,598,"第三条订阅");

ServerTools.sleep(10000);
ServerTools.click(363,754,"第二条订阅");
ServerTools.sleep(5000);
ServerTools.execShellCmd("input keyevent 4");
ServerTools.sleep(1000);
ServerTools.execShellCmd("input keyevent 4");
ServerTools.sleep(3000);

// 回主界面了
// 视频
ServerTools.click(358,1231,"视频标签");
ServerTools.sleep(10000);

ServerTools.click(193,310,"第一个视频");
ServerTools.sleep(10000);
ServerTools.execShellCmd("input keyevent 4");
ServerTools.sleep(3000);


// 回主界面了
// 我
ServerTools.click(644,1229,"我 标签");
ServerTools.sleep(5000);
ServerTools.click(332,719,"金币商城");
ServerTools.sleep(15000);
ServerTools.click(557,494,"每日签到");
ServerTools.sleep(10000);



ServerTools.click(261,86,"我的订阅");
ServerTools.sleep(10000);
ServerTools.click(402,406,"第一个任务");
ServerTools.sleep(2000);
ServerTools.click(370,837,"领取任务奖励");
ServerTools.sleep(10000);
for(var x=0;x<7;x++){
	for (var y = 0; y < 4; y++) {
		ServerTools.click(80+93*x,397+93*y,x+","+y);
		ServerTools.sleep(100);
	}
}
ServerTools.sleep(10000);

ServerTools.exit(true);