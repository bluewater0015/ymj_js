

	window.onload = function(){
		
		//获取imgList
		var imgList = document.querySelector(".imgList");
		//console.log(imgList);
		var imgLi = imgList.getElementsByTagName("li");
		//console.log(imgLi);
		var btnList = document.querySelector(".btnList");
		//console.log(btnList);
		var btnLi = btnList.getElementsByTagName("li");
		//console.log(btnLi);
		//var preBtn = document.querySelector(".preBtn");
		//var nextBtn = document.querySelector(".nextBtn");
		var i = 0;
		var iWidth = imgLi[0].offsetWidth;
		//console.log(iWidth);  //1920
		imgList.innerHTML += imgList.innerHTML;
		//console.log(imgList);
		var timer = setInterval(startMove,3000);
		
		function startMove(){
			i++;
			var iLeft = - i * iWidth;
			//console.log(iLeft);
			move(imgList,"left",iLeft,next);
			//轮播图切换的图片和小圆点相对应
			for(var j=0;j<btnLi.length;j++){
				if(i == j){
					btnLi[j].className = "active";
				}else{
					btnLi[j].className = "";
				}
				if(i == imgLi.length/2){
					btnLi[0].className = "active"
				}
			}
		}
		//next()
		function next(){
			if(i >= imgLi.length/2){
				imgList.style.left = 0;
				i=0;
			}
		}
		//鼠标点击
		/*for(var j = 0;j<btnLi.length;j++){
			btnLi[j].index = j;
			btnLi[j].onclick = function(){
				var i = this.index - 1; // -1 0 1 2 3 4 5   你是sb吗? 为何要加var
				//console.log(i);
				btnMove();
			}
		}*/
		//当点击按钮式 切换到对应的轮播图
		for(var j=0;j<btnLi.length;j++){
			btnLi[j].index = j;
			btnLi[j].onclick = function(){
				i = this.index - 1; // -1 0 1
				btnMove();
			}
			//btnMove(); //放在点击事件之外 肯定不会发生效果了
		}
		function btnMove(){
			startMove();
			clearInterval(timer);
			timer = setInterval(startMove,3000);
		}
		//上一页
	/*	preBtn.onclick = function(){
			if(i == 0){
				i = imgLi.length/2 - 2;
			}else{
				i = i - 2;
			}
			btnMove();
		}
		//下一页
		nextBtn.onclick = function(){
			next();
			btnMove();
		}*/
	}
