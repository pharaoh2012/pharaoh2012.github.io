//G_exitApp = false;

runPackage("com.pingan.wetalk", 15000, true);

click(72, 1222, "直播按钮", 15000);

click(184, 745, "第一个直播", 15000);

if (ServerTools.getClassName() == "com.pingan.wetalk.module.videolive.activity.VideoLiveActivity") {
	click(657, 1228, "点赞", 3000);
	click(179, 1226, "回复问题", 2000);
	execShellCmd("input text ...");
	click(647, 697, "发送按钮", 5000);

	click(64, 1229, "分享按钮", 5000);
	click(450, 860, "QQ好友", 15000);
	doQQ();
	back();
	sleep(2000);
}

click(343, 196, "点击广告", 15000);

back();
sleep(2000);

click(653, 1227, "我的", 5000);

click(315, 496, "我的通宝", 5000);

for (var i = 0; i < 1; i++) {
	checkSub();
}



function doQQ() {
	click(198, 543, "QQ我的电脑", 5000);
	//click(210,357,"QQ我的电脑",5000);
	click(507, 853, "发送按钮", 5000);
	click(204, 737, "返回", 10000);
}

function checkSub() {
	click(85, 658, "第一个+20", 15000);
	var className = ServerTools.getClassName();
	if (className == "com.pingan.wetalk.module.opinion.activity.OpinionSquareActivity") {
		click(346, 366, "第一个观点", 15000);
		click(621, 1237, "点赞", 5000);
		click(119, 1225, "评论", 3000);
		execShellCmd("input text ...");
		click(662, 696, "发送", 5000);
		click(669, 97, "分享按钮", 5000);
		click(449, 861, "QQ好友", 15000);
		doQQ();
		back(2);
	}
}


// click(450,393,"签到有礼",15000);

// //click(443,506,"签到有礼",15000);

// //click(614,646,"签到有礼",15000);

// click(336,972,"签到",5000);