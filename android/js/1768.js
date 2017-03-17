
runPackage("com.pingan.gamehall",15000);

//click(593,468,"签到领积分",15000);    

click(488,468,"签到领积分",15000);

click(354,936,"签到",10000);

takePicture();

if("com.pingan.gamehall.SecondaryActivity" == ServerTools.getClassName()) {
	click(359,306,"万里通",2000);
	click(139,419,"用户名",500);
	click(142,1222,"键盘123",500); //转换为数字键盘
	execShellCmd('input text 13638371023');
	click(357,584,"关闭提示",500);
	copyText("rm4780062");
	click(112,505,"密码",500);
	execShellCmd("input swipe 112 505 112 505 2000");
	sleep(1000);
	click(60,451,"粘贴",500);
	click(368,667,"登录",15000);
	click(354,936,"签到",5000);
}