

runPackage("com.tmall.wireless");
sleep(15000);
click(648,1223,"标签：我");  sleep(5000);
click(88,1022,"领钱了");  sleep(10000);
click(600,854,"浏览赢宝箱");  sleep(30000);
back();
sleep(2000);
click(608,419,"点击赢宝箱");  sleep(5000);

click(362,466,"点击海报");  sleep(15000);
back();
sleep(2000);
back();
sleep(2000);
click(355,1005,"加载更多任务");  sleep(5000);   

click(603,1086,"点赞赢宝箱");  sleep(15000);
execShellCmd("input swipe 400 500 400 200");
sleep(3000);
//双击图片
click(176,888,"双击图片"); click(176,888,"双击图片"); 


// sleep(5000);
// exit(true);