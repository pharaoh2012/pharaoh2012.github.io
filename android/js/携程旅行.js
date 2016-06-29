

ServerTools.runPackage("ctrip.android.view");
ServerTools.sleep(15000);
for (var i = 0; i < 5; i++) {
	ServerTools.execShellCmd("input swipe 400 700 400 200");
	ServerTools.sleep(1000);
}
ServerTools.click(158,845,"签到新玩法");  ServerTools.sleep(10000);

ServerTools.click(359,886,"关闭按钮");  ServerTools.sleep(2000);
ServerTools.click(130,966,"分享抽奖");  ServerTools.sleep(4000);
ServerTools.click(357,757,"立即分享");  ServerTools.sleep(5000);

ServerTools.click(613,670,"QQ空间");  ServerTools.sleep(10000);
ServerTools.click(651,101,"发表按钮");  ServerTools.sleep(5000);

ServerTools.click(345,864,"我知道了");  ServerTools.sleep(5000);
for (var i = 0; i < 5; i++) {
	ServerTools.execShellCmd("input swipe 400 700 400 200");
	ServerTools.sleep(1000);
}

ServerTools.click(353,923,"试试手气");  ServerTools.sleep(10000);


ServerTools.exit(true);