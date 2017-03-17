

runPackage("com.juanpi.ui",15000);

click(355,819,"立刻领取",15000);
var className = ServerTools.getClassName();
if(className != "com.juanpi.ui.activitycenter.gui.JPSignActivity") {
	back();
	sleep(2000);
	click(650,578,"微信红包",15000);
}

click(355,292,"签到赚积分",15000);

takePicture();

back();

sleep(1000);

click(193,515,"微信红包",5000);

click(353,800,"开红包",10000);


// {"success":true,"PackageName":"com.juanpi.ui","ClassName":"com.juanpi.ui.goodslist.gui.main.NewMainActivity"}
// {"success":true,"PackageName":"com.juanpi.ui","ClassName":"com.juanpi.ui.activitycenter.gui.JPSignActivity"}