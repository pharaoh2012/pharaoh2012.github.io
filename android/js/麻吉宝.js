runPackage("com.alimama.aladdin.app", 15000, true);
//click(229, 963, "大号", 15000);
back();
sleep(2000);

click(630, 1229, "点击我的", 10000);
click(427, 911, "分享+5次任务机会", 4000);
//click(575,859,"QQ好友");  
click(357, 856, "微信朋友圈", 5000);

toast("等待微信启动 10s");
sleep(10000, true);

click(645, 99, "微信发送按钮", 5000);
click(229, 963, "大号", 1500);