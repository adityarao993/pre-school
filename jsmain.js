var imgar = ["img/pre2.jpg","img/pre3.jpg","img/pre4.jpg","img/pre5.jpg"];
var count1 = 0 ;

function startTime(){
	
	if(count1== imgar.length){
		count1 = 0;
	}
		
		document.getElementById("pre1").src= imgar[count1];
		count1++;
		setTimeout("startTime()",1000);
	}
