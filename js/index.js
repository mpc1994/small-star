 window.onload=function(){
     	var oDiv1=document.getElementById("div1");
     	var oPrev=document.getElementById("prev");
     	var oNext=document.getElementById("next");
        var oNum=document.getElementById("sum");
        var startIndex = 0;
     	oNext.onclick=function(){
            startIndex++;
            oDiv1.style.transform = "translate("+(-600*startIndex)+"px,0)";//transform是一个相当于heigth的样式，translate是改变类似属性值的方法
            oDiv1.style.transition = "transform 1s";
            //与setTimeout几乎是同步执行
            setTimeout(function(){
                if(startIndex==6){
                    startIndex = 0;
                    oDiv1.style.transition = "transform 0s";
                    oDiv1.style.transform = "translate(0px,0)";
                }
            },1000)
            
     	}
     	oPrev.onclick=function(){
     		startIndex--;
            oDiv1.style.transform = "translate("+(-600*startIndex)+"px,0)";
            oDiv1.style.transition = "transform 1s";
             setTimeout(function(){
                if(startIndex==-1){
                    startIndex = 5;
                    oDiv1.style.transition = "transform 0s";
                    oDiv1.style.transform = "translate(-3000px,0)";
                }
            },1000)
     	}
     }