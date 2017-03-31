function getStyle(ele, attr) {
	if(window.getComputedStyle) {
		return getComputedStyle(ele, null)[attr] //键名 键值   name：1
	} else {
		return ele.currentStyle[attr];
	}
}
//1 运动对象
//2 属性名称
//3 目标值
//4 fn 回调函数
//function startMove(ele, attr, target, fn) {
//	clearInterval(ele.timer);
//	ele.timer = setInterval(function() {
//		//						fn(); //错误
//		//						console.log(fn);
//		//获取当前的属性值
//		if(attr == "opacity") {
//
//			var current = getStyle(ele, attr) * 100;
//
//			var speed = (target * 100 - current) / 8;
//			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//		} else {
//			var current = parseInt(getStyle(ele, attr));
//			//speed 的绝对值大于1
//			var speed = (target - current) / 8;
//			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//		}
//
//		// speed +current
//
//		if(attr == "opacity") {
//
//			ele.style.opacity = (current + speed) / 100;
//			ele.style.filter = "alpha(opacity=" + (current + speed) + ")"; //ie
//
//		} else {
//			ele.style[attr] = current + speed + "px";
//		}
//		//停止计时器
//
//		if(attr == "opacity") {
//			if(current + speed == target * 100) {
//				console.log('停止计时器');
//				clearInterval(ele.timer);
//				if(fn) {
//					fn()
//				}
//
//			}
//
//		} else {
//			if(current + speed == target) {
//				console.log('停止计时器');
//				clearInterval(ele.timer);
//				if(fn) {
//					fn()
//				}
//
//			}
//		}
//
//	}, 10)
//}
// 1运动对象
//2运动的效果 构成的对象
//3回调函数

function startMove(ele, json,fn) {
	clearInterval(ele.timer);
	ele.timer = setInterval(function() {
		//						fn(); //错误
		//						console.log(fn);


		var bool = true;  //如果初始条件是false  后面的条件应该怎么处理
		//遍历json对象
		for(var k in json){
//			console.log(k);
//			console.log(json[k]);
var attr = k;
var target = json[k];


			//获取当前的属性值
			if(attr == "opacity") {

				var current = getStyle(ele, attr) * 100;

				var speed = (target * 100 - current) / 8;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			} else {
				var current = parseInt(getStyle(ele, attr));
				//speed 的绝对值大于1
				var speed = (target - current) / 8;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			}

			// speed +current

			if(attr == "opacity") {

				ele.style.opacity = (current + speed) / 100;
				ele.style.filter = "alpha(opacity=" + (current + speed) + ")"; //ie

			} else {
				ele.style[attr] = current + speed + "px";
			}
			//如果在for in 里面清除计时器
			//如果某一项达到目标值 清除计时器

			//判断bool 是否改变
			//只要某一项 当前的值  不等于目标值  bool 改false
			if(attr == "opacity") {
				if(current + speed != target * 100) {
//					console.log(current + speed,target,attr);
bool = false;
}else{
	// console.log(current + speed,target,attr);
	// console.log(attr+"动画完成");
				//	bool = true
			}

		} else {
			if(current+speed !=target){
				bool = false;
//					console.log(current + speed,target,attr);
}else{
	// console.log(current + speed,target,attr);
	// console.log(attr+"动画完成");
	// 			//	bool = true;
}

}

}






//		//停止计时器
if(bool){
	clearInterval(ele.timer);
	if(fn){
		fn();
	}
}

}, 10)
}
