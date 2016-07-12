

runPackage("com.netease.newsreader.activity",15000);

click(163,149,"点击重庆",10000);
click(181,849,"第二条新闻",15000);

click(671,1232,"分享按钮",2000);

click(577,679,"邮箱");
sleep(10000);
execShellCmd("input keyevent 4");
sleep(1000);
execShellCmd("input keyevent 4");
sleep(3000);
click(138,1235,"写跟帖");
sleep(1000);
execShellCmd("input text ...");
sleep(1000);
click(665,694,"发送按钮");
sleep(10000);
execShellCmd("input keyevent 4");
sleep(3000);

//网易号
click(291,150,"网易号",10000);

click(94,610,"我的网易号",10000);
click(201,451,"第二条记录",10000);
click(208,755,"第二条记录",10000);

execShellCmd("input keyevent 4");
sleep(2000);
execShellCmd("input keyevent 4");
sleep(2000);
execShellCmd("input keyevent 4");
sleep(2000);


// click(218,1238,"阅读");
// sleep(10000);
// click(261,86,"我的订阅");
// sleep(10000);
// click(286,598,"第三条订阅");

// sleep(10000);
// click(363,754,"第二条订阅");
// sleep(5000);
// execShellCmd("input keyevent 4");
// sleep(1000);
// execShellCmd("input keyevent 4");
// sleep(3000);




// 回主界面了
// 视频
click(358,1231,"视频标签");
sleep(10000);

click(193,310,"第一个视频");
sleep(10000);
execShellCmd("input keyevent 4");
sleep(3000);


//话题
click(446,1233,"话题标签",10000);

click(380,566,"第一个问题",5000);
execShellCmd("input keyevent 4");
sleep(3000);
execShellCmd("input keyevent 4");
sleep(3000);

// 回主界面了
// 我
click(644,1229,"我 标签");
sleep(5000);
click(332,719,"金币商城");
sleep(15000);
click(557,494,"每日签到");
sleep(10000);

// click(261,86,"我的订阅");
// sleep(10000);
// click(402,406,"第一个任务");
// sleep(2000);
// click(370,837,"领取任务奖励");
// sleep(10000);
for(var x=0;x<7;x++){
	for (var y = 0; y < 4; y++) {
		click(80+93*x,397+93*y,x+","+y);
		sleep(100);
	}
}
// sleep(10000);

// exit(true);