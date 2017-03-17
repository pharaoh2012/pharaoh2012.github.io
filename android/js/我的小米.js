runPackage("com.xiaomi.account", 15000, true);

click(178, 426, "玩机指南", 7000);

click(466, 95, "分类", 10000);

click(184, 323, "系统指南", 5000);

var tryCount = 0;
if (isClass("com.xiaomi.vip.ui.tasklist.TaskListActivity")) {
	for (var i = 0; i < 20; i++) {
		if (isClass("com.xiaomi.vip.ui.tasklist.TaskListActivity")) {
			tryCount++;
			swipe(300, 300, 300, 700);
			sleep(5000);
			if (tryCount >= 3) break;
			//takePicture();
			click(615, 193, "第一个任务", 10000);
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