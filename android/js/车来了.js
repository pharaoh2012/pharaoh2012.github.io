

ServerTools.runPackage("com.ygkj.chelaile.standard");
ServerTools.sleep(15000);

ServerTools.click(629,1224,"我的 标签");

ServerTools.sleep(5000);
ServerTools.click(501,223,"签到按钮"); 
ServerTools.sleep(5000);
ServerTools.click(355,919,"分享按钮");  

ServerTools.sleep(2000);
ServerTools.click(287,878,"分享到QQ空间");  
//等待QQ启动
ServerTools.sleep(10000);
ServerTools.click(651,101,"发表按钮"); 

ServerTools.sleep(10000);

ServerTools.exit(true);