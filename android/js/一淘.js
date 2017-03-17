copyText("1");
runPackage("com.taobao.etao",15000);

// click(626,1229,"我的",15000);

// click(235,961,"签到领集分宝",5000);

var node = new Nodes();
var y=0;  //签到按钮
for (var i = 150; i < 850; i += 90) {
	if (node.findAndClick({
			"resource-id": "com.taobao.etao:id/home_views_circle_nav_item_image",
			pt:[360,i]
		})) { //click(356, 292, "点我签到");
		y=i;
		break;
	}
}
var dy = 716;
if(y>0) {
	dy = y;
}

//click(352,667,"签到领钱",15000);
//click(355,472,"签到领钱",15000);
//
//var dy = 472;

//click(355,dy,"签到领钱",15000);



sleep(15000);
click(356, 292, "点我签到");
sleep(5000);
click(356, 292, "点我签到");
sleep(5000);
takePicture();

back();

sleep(3000);

click(84,1233,"首页",10000);

click(222,dy,"0元抽",5000);

//click(217,dy,"0元抽",15000);
//click(218,669,"0元抽",15000);

click(583, 411, "立即0元抽",15000);

click(188, 608, "立即0元抽",10000);

click(349, 736, "分享抽奖",3000);

back(2);

sleep(3000);

click(583, 411, "立即0元抽",15000);

click(188, 608, "立即0元抽",5000);

/*
click(630, 1222, "我的 标签");
sleep(10000);

click(230, 973, "签到领积分卡");

sleep(10000);
click(356, 292, "点我签到");

sleep(5000);
click(356, 292, "点我签到");
sleep(10000);

click(201, 651, "今日0元抽");
sleep(10000);
click(583, 411, "立即0元抽");
sleep(10000);
click(188, 608, "立即0元抽");
sleep(8000);
click(349, 736, "分享抽奖");
sleep(3000);
click(123,1098,"淘口令",15000);
click(188, 608, "立即0元抽");
copyText("1");

// sleep(10000);

// exit(true);

*/