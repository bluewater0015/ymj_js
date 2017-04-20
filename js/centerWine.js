
	var selectCenter = document.querySelector(".selectCenter");
	var mouseLi = selectCenter.querySelectorAll(".mouseLi");
	var ulList = selectCenter.getElementsByTagName("ul");
	//console.log(ulList);
	//console.log(mouseLi.length); //6
/*banner图上的li*/
	for(var i=0;i<mouseLi.length;i++){
		mouseLi[i].index = i;
		mouseLi[i].onmouseover = function(){
			var index = this.index;
			ulList[index].style.display = "block";
		}
		mouseLi[i].onmouseout = function(){
			var index = this.index;
			ulList[index].style.display = "none";
		}
	}