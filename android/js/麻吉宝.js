

ServerTools.runPackage("com.alimama.aladdin.app");
ServerTools.sleep(15000);
ServerTools.click(630,1229,"点击我的");  
ServerTools.sleep(10000);
ServerTools.click(427,911,"分享+5次任务机会");  
ServerTools.sleep(4000);
//ServerTools.click(575,859,"QQ好友");  
ServerTools.click(143,1044,"QQ空间");  
ServerTools.sleep(10000);

//等待QQ启动
ServerTools.sleep(10000);
ServerTools.click(651,101,"发表按钮"); 

ServerTools.sleep(10000);

ServerTools.exit(true);