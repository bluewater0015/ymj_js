
	/*content.js*/
	var tabSelect = document.querySelector(".tabSelect");
	var tabList = tabSelect.getElementsByTagName("li");
	//console.log(tabList.length);  //5
	var tabrightSel = document.querySelector(".tabrightSel");
	var tabContent1 = tabrightSel.querySelector(".tabContent1");
	var iHeight = tabContent1.offsetHeight;
	for(var j=0;j<tabList.length;j++){
		tabList[j].index = j;
		tabList[j].onmouseover = function(){
			var index = this.index;
			tabList[0].className = "";
			tabList[index].className = "tabActive";
			var iTop = - index * iHeight;
			move(tabrightSel,"top",iTop);
		}
		tabList[j].onmouseout = function(){
			var index = this.index;
			tabList[index].className = "";
		}
	}
	
