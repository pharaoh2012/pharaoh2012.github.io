

runPackage("com.ddz.mobile",20000,true);

takePicture();

toast("截图：" + G_jsName);
sleep(2000);

click(221,518,"分享",5000);

click(357,902,"微信朋友圈",15000);

click(642,97,"微信发送",5000);
//click(444,653,"签到");