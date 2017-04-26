

runPackage("com.netease.newsreader.activity",15000);

click(163,149,"点击重庆",10000);

click(398,1002,"第二条新闻",15000);
//click(181,849,"第二条新闻",15000);

click(671,1232,"分享按钮",2000);

click(114,991,"QQ空间",15000);


click(662,101,"发表",5000);
//click(574,685,"邮箱",10000);
// click(285,520,"微信朋友圈",15000);

// click(642,99,"微信发送",5000);

click(138,1235,"写跟帖");
sleep(1000);
execShellCmd("input text ...");
sleep(1000);
click(665,694,"发送按钮");
sleep(10000);
execShellCmd("input keyevent 4");
sleep(3000);

// 回主界面了
// 视频
//click(248,153,"视频标签",15000);
click(214,151,"视频标签",15000);

click(193,310,"第一个视频",10000);
execShellCmd("input keyevent 4");
sleep(3000);


click(216,150,"话题标签",5000);

click(328,586,"话题",15000);

click(355,1229,"回复按钮",1000);

execShellCmd("input text ...");

sleep(1000);
click(665,700,"发布",15000);
//takePicture();
back(2);
sleep(1000);

click(218,151,"问吧",15000);
click(334,550,"第一个问题",15000);
takePicture();
back(2);
sleep(2000);
// 回主界面了
// 我
click(644,1229,"我 标签",15000);

takePicture();

click(662,213,"签到",5000);

