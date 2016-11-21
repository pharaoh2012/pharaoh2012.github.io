//重庆移动手机营业厅
var name = "扫一扫";
var ret = AndroidNode.SearchByText(name,false);
ServerTools.toast(name + "点击:"+ret);