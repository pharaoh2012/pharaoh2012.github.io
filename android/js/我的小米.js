runPackage("com.xiaomi.account", 15000, true);

click(142,1070,"小米VIP",7000);

click(310,1188,"任务",10000);

click(466, 95, "分类", 10000);

click(179,448,"系统指南",10000);
//click(184, 323, "系统指南", 5000);

var tryCount = 0;
if (isClass("com.xiaomi.vip.ui.tasklist.TaskListActivity")) {
	for (var i = 0; i < 20; i++) {
		if (isClass("com.xiaomi.vip.ui.tasklist.TaskListActivity")) {
			tryCount++;
			swipe(300, 300, 300, 700);
			sleep(5000);
			if (tryCount >= 3) break;
			//takePicture();
			
			//click(613,323,"第2个任务",10000);
			click(615, 193, "第一个任务", 10000);
			if(isClass("com.xiaomi.market.ui.RecommendationGridListActivity")) {
				back();
				sleep(2000);
				click(613,323,"第2个任务",10000);
			}
			//click(615,193,"第一个任务",10000);
		} else {
			tryCount = 0;
			back();
			sleep(5000);
			if (!isClass("com.xiaomi.vip.ui.tasklist.TaskListActivity")) {
				back(2);
				sleep(5000);
			}
		}

	}
}



// sleep(10000);
// exit(true);