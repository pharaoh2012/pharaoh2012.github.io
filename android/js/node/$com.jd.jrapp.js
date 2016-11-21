//京东金融主页

G_ClassNames["com.jd.jrapp.activity.web.WebActivity"] = function() {
	var clickText = waitClickText(["签到", "领京豆", "签到成功"], 10);
	if (clickText === "签到成功") {
		//ServerTools.takePicture(ServerTools.)
		exit();
	}
};

G_ClassNames["com.jd.jrapp.ver2.main.V2MainActivity"] = function() {
	waitClickText("去签到", 10);
};