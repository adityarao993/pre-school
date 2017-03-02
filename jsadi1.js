
var img2 = ["img/pre1.jpg","img/pre2.jpg","img/pre3.jpg","img/pre4.jpg","img/pre5.jpg"];
var counter1 = 0 ;

function picOn1(){
	
	if(counter1 == img2.length){
		
		counter1 = 0 
	}
	document.getElementById("pre1").src=img2[counter1];
	counter1++;
	
	setTimeout("picOn1()",3000);
}window.onload=function(){
    var btn1= document.getElementById("btn1").addEventListener("click",myFun1);
    var btn2= document.getElementById("btn2").addEventListener("click",myFun2);
	
	function myFun1(){
		var img1= document.getElementById("pre1");
		img1.style.border= "thick solid green";
		
	}
}

	function myFun2(){
		var pre1=document.getElementById("pre1").style.border="thick double  yellow";
		
	}