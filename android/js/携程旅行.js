

runPackage("ctrip.android.view");
sleep(15000);
for (var i = 0; i < 5; i++) {
	execShellCmd("input swipe 400 700 400 200");
	sleep(1000);
}
click(158,845,"签到新玩法");  sleep(10000);

click(359,886,"关闭按钮");  sleep(2000);
click(130,966,"分享抽奖");  sleep(4000);
click(357,757,"立即分享");  sleep(5000);

click(613,670,"QQ空间");  sleep(10000);
click(651,101,"发表按钮");  sleep(5000);

click(345,864,"我知道了");  sleep(5000);
for (var i = 0; i < 5; i++) {
	execShellCmd("input swipe 400 700 400 200");
	sleep(1000);
}

click(353,923,"试试手气");  

// sleep(10000);


// exit(true);