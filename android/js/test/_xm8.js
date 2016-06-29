

ServerTools.click(362,1197,"回复");  ServerTools.sleep(5000);

ServerTools.click(167,1220,"键盘到数字模式");  ServerTools.sleep(2000);

var rnd = parseInt(Math.random() * 100000000);

ServerTools.execShellCmd("input text "+rnd);
ServerTools.sleep(1000);
ServerTools.back();
ServerTools.sleep(1000);
ServerTools.click(651,97,"发布按钮");  ServerTools.sleep(5000);
ServerTools.back();