G_exitApp = false;
var packageName = "com.supercell.clashroyale.mi";
runPackage(packageName, 5000, true);

function autoFight() {
	while (true) {
		if (ServerTools.getPackageName() != packageName) {
			toast(ServerTools.getPackageName() + " not 皇室战争");
			return;
		}
		var loopCount = 1;
		var fn = Date.now() + ".png";
		ServerTools.takePicture(fn);
		if (ServerTools.checkColors("433,790,269,791,268,841,348,776", "-12205,-12205,-17366,-12205", fn)) {
			//开始对战
			loopCount = 7;
			click(352, 817, "开始对战", 1000);
			click(363, 809, "关闭没有奖励提示", 2000);

			sleep(4000, true);
		} else if (ServerTools.checkColors("44,1068,63,1067,78,1067,89,1067,92,1076,50,1095,69,1095,83,1096,51,1084,64,1084,79,1086", "-1,-1,-1,-1,-1,-1,-1,-1,-16777216,-16777216,-16777216", fn)) {
			//比赛中
			for (var j = 0; j < loopCount; j++) {
				for (var i = 0; i < 4; i++) {
					if (ServerTools.getPackageName() != packageName) {
						toast(ServerTools.getPackageName() + " not 皇室战争");
						return;
					}
					click(221 + i * 135, 1131, "兵种:" + i, 1000);
					click(550, 273, "右边公主塔:" + i, 1000);
				}
				//click(352, 817, "开始对战", 1000);
				toast("j=" + j);
				sleep(5000, true);
			}
		} else if (ServerTools.checkColors("415,1206,304,1198,306,1226,411,1226", "-9978881,-9979393,-11751937,-11751425", fn)) {
			click(363, 1220, "关闭竞技场窗口", 2000);
		} else if (ServerTools.checkColors("247,898,349,900,450,905,255,955,356,984,460,960", "-39322,-39322,-39322,-244924,-245180,-245436",fn)) {
			sleep(5000);  //一直为等待战斗窗口
			if (ServerTools.checkColors("247,898,349,900,450,905,255,955,356,984,460,960", "-39322,-39322,-39322,-244924,-245180,-245436")) {
				click(356, 944, "取消战斗", 2000);
			}
		} else {
			loopCount = 2;
			click(550, 273, "右边公主塔", 1000);
			click(363, 1220, "关闭竞技场窗口", 2000);
		}
		ServerTools.DeletePicture(fn);
		sleep(5000);
	}
}



autoFight();

