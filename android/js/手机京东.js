runPackage("com.jingdong.app.mall", 20000, true);

var dy = 579; //760
var tryCount = 0;

var node = new Nodes(1);

log(node.getPackage());

if(node.getPackage() != G_packageName) {
	node = new Nodes(0);
	log(node.getPackage());
	if(node.getPackage() != G_packageName) {
		exit(1);
		return;
	}
}




if (qiandao()) {
	liuliang();
	hzq();
}


function qiandao() {
	for (var y = 860; y >= 170; y -= 70) {
		if (node.findAndClick({
				pt: [214, y],
				//			class: "android.widget.ImageView",
				"resource-id": "com.jingdong.app.mall:id/fx"
			})) {
			dy = y;
			log("find:dy="+y);
			//console.info(y);
			sleep(10000);
			click(565, 255, "签到", 8000);
			click(356,630,"翻牌",7000);
			takePicture();
			back();
			sleep(5000);
			return true;
		}
	}
	return false;
}

function hzq() {
	//惠赚钱
	click(502, dy, "惠赚钱", 15000);
	click(362, 648, "抢钢镚", 15000);
	click(358, 325, "打卡", 5000);
}


function liuliang() {
	// tryCount++;
	// if (tryCount > 2) return false;
	click(71, dy, "充值中心", 15000);
	sleep(10000);
	click(601, 103, "领流量", 15000);
	takePicture();
	click(183, 531, "流量签到", 5000);
	takePicture();
	back(2)
	sleep(2000);
}