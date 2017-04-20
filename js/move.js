

	//window.onload = function(){
		
		//封装运动函数
		
		//获取元素属性值
		/*
		 * 	obj 要获取属性值的元素
		 * 	attr 要获取的属性值 
		 */
		function getStyleAttr(obj,attr){
			if(window.getComputedStyle){ // 支持火狐谷歌浏览器
				return getComputedStyle(obj,null)[attr];
			}
			return currentStyle[attr];
		}
		
		//运动函数
		/*
		 * 	obj 元素
		 * 	attr 属性
		 * 	target 目标值
		 * 	fn 回调函数
		 */
		function move(obj,attr,target,fn){
			//清除定时器
			clearInterval(obj.timer);
			//开启定时器
			obj.timer = setInterval(function(){
				//1.获取当前值
				var current = 0;
				if(attr == "opacity"){
					current = parseFloat(getStyleAttr(obj,attr)*100);
					current = Math.round(current);
				}else{
					current = parseFloat(getStyleAttr(obj,attr));
					current = Math.round(current);
				}
				//2.设置速度
				var speed = (target - current) / 10;
				speed = speed > 0 ? Math.ceil(speed): Math.floor(speed);
				//3.临界值
				if(current == target){  
					clearInterval(obj.timer);
					if(fn){
						fn();
					}
					return;
				}
				//运动
				if(attr == "opacity"){//记得是等号 不是赋值
					obj.style.opacity = ( current + speed )/100;
					obj.style.filter  ="alpha(opacity = " + (current + speed) + ")";
				}else{
					obj.style[attr] = current + speed + "px";
				}
			},30)
		}

	//}
