

ServerTools.runPackage("com.tmall.wireless");
ServerTools.sleep(15000);
ServerTools.click(648,1223,"标签：我");  ServerTools.sleep(5000);
ServerTools.click(88,1022,"领钱了");  ServerTools.sleep(10000);
ServerTools.click(600,854,"浏览赢宝箱");  ServerTools.sleep(30000);
ServerTools.back();
ServerTools.sleep(2000);
ServerTools.click(608,419,"点击赢宝箱");  ServerTools.sleep(5000);

ServerTools.click(362,466,"点击海报");  ServerTools.sleep(15000);
ServerTools.back();
ServerTools.sleep(2000);
ServerTools.back();
ServerTools.sleep(2000);
ServerTools.click(355,1005,"加载更多任务");  ServerTools.sleep(5000);   

ServerTools.click(603,1086,"点赞赢宝箱");  ServerTools.sleep(15000);
ServerTools.execShellCmd("input swipe 400 500 400 200");
ServerTools.sleep(3000);
//双击图片
ServerTools.click(176,888,"双击图片"); ServerTools.click(176,888,"双击图片"); ServerTools.sleep(5000);



ServerTools.exit(true);