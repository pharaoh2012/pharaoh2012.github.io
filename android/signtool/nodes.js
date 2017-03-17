function Nodes(nodeJson) {
	//var g_nodeId = 0;
	var nodes = [];

	function checkClass(o) {
		if (o.class == "android.widget.FrameLayout") return false;
		if (o.class == "android.widget.LinearLayout") return false;
		if (o.class == "android.widget.RelativeLayout") return false;
		if (o.class == "android.widget.ListView") return false;
		return true;
	}

	function parseNode(o) {
		if (checkClass(o)) {
			var bounds = o.bounds.replace("][", ",").replace("[", "").replace("]", "");
			var xys = bounds.split(",");
			var rect = {
				left: +xys[0],
				top: +xys[1],
				right: +xys[2],
				bottom: +xys[3]
			};
			// rect.width = rect.right - rect.left;
			// rect.height = rect.bottom - rect.top;
			// rect.centerX = (rect.left + rect.right) / 2;
			// rect.centerY = (rect.top + rect.bottom) / 2;
			o.rect = rect;

			//o.nodeId = g_nodeId;
			//o.pId = pid;
			delete o.package;
			//if(!o["content-desc"]) delete o["content-desc"];
			nodes.push(o);
		}

		//if(o.class == "android.widget.FrameLayout")


		//g_nodeId++;
		//console.info(bounds, cls);

		if (o.node) {
			parseChildNode(o.node);
			delete o.node;
		}
		//delete o.bounds;
	}

	function parseChildNode(arr, pid) {
		//arr.each
		if (arr instanceof Array) {
			for (var i = arr.length - 1; i >= 0; i--) {
				parseNode(arr[i]);
			}
		} else {
			parseNode(arr);
		}
	}

	//g_nodeId = 0;
	if (!nodeJson) {
		nodeJson = ServerTools.getDump();
	}
	var json = JSON.parse(nodeJson);

	parseNode(json.hierarchy.node);

	this.getNodes = function() {
		return nodes;
	};

	function _checkNode(node,q,fn) {
		if (q.textLength) {
			if (node.text.length !== q.textLength) return false;
		}
		if (q.class) {
			if (node.class.indexOf(q.class) === -1) return false;
		}
		if (q.text) {
			if (node.text != q.text) return false;
		}
		if (q["content-desc"]) {
			if (node["content-desc"].indexOf(q["content-desc"]) === -1) return false;
		}
		if (q["resource-id"]) {
			if (node["resource-id"] != q["resource-id"]) return false;
		}
		if (q.width) {
			var w = node.rect.right - node.rect.left;
			if (w !== q.width) return false;
		}
		if (q.height) {
			var h = node.rect.bottom - node.rect.top;
			if (h !== q.height) return false;
		}
		if (q.pt) {
			var x = q.pt[0];
			var y = q.pt[1];
			if (node.rect.left > x) return false;
			if (node.rect.right < x) return false;
			if (node.rect.top > y) return false;
			if (node.rect.bottom < y) return false;
		}
		if (fn) {
			if (!fn(node)) return false;
		}	
		return true;	
	}

	this.find = function(q, fn) {
		var ret = [];
		for (var i = nodes.length - 1; i >= 0; i--) {
			var node = nodes[i];
			if(_checkNode(node,q,fn)) ret.push(node);
		}
		return ret;
	};

	this.findOne = function(q, fn) {
		for (var i = nodes.length - 1; i >= 0; i--) {
			var node = nodes[i];
			if(_checkNode(node,q,fn)) return node;

		}
		return null;
	};

	this.findAndClick = function(q, fn) {
		for (var i = nodes.length - 1; i >= 0; i--) {
			var node = nodes[i];
			if(_checkNode(node,q,fn)) {
				click(parseInt((node.rect.right+node.rect.left)/2,10),parseInt((node.rect.bottom+node.rect.top)/2,10));
				return node;				
			}
		}
		return null;
	};


}