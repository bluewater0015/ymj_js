


	//window.onload = function(){
		
		//js效果
		var siteLinks = document.querySelector(".siteLinks");
		var siteLi = siteLinks.getElementsByTagName("li");
		var myAccounts = document.querySelector(".myAccounts");
		var myLi = myAccounts.getElementsByTagName("li");
		var services = document.querySelector(".services");
		var serLi = services.getElementsByTagName("li");
		var aLi = services.getElementsByTagName("a");
		siteLi[2].onmouseover = myAccounts.onmouseover = function(){
			myAccounts.style.display = "block";
			for(var i=0;i<myLi.length;i++){
				myLi[i].index = i;
				myLi[i].onmouseover = function(){
					var index = this.index;
					myLi[index].className = "active";
				}
				myLi[i].onmouseout = function(){
					var index = this.index;
					myLi[index].className = "";
				}
			}
		}
		//遇到的困难 鼠标移出时 如何让下拉菜单消失
		siteLi[2].onmouseout = myAccounts.onmouseout= function(){
			myAccounts.style.display = "none";
		}
		
		siteLi[5].onmouseover = services.onmouseover = function(){
			services.style.display = "block";
		}
		for(var i=0;i<aLi.length;i++){
			aLi[i].index = i;
			aLi[i].onmouseover = function(){
				var index = this.index;
				aLi[index].className = "active";
			}
			aLi[i].onmouseout = function(){
				var index = this.index;
				aLi[index].className = "";
			}
		}
		siteLi[5].onmouseout = services.onmouseout = function(){
			services.style.display = "none";
		}

	//}
