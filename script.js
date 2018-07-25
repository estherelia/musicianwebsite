

$(document).ready(function(){

let putinlyrics = false;

$("#putin").click(function(){
	if (putinlyrics){
	$(this).attr("src", "pictures/darkmatter.jpg");
	putinlyrics=false;
	} else {
	$(this).attr("src", "pictures/putin.jpg");
	putinlyrics=true;	
	}
})

let politicalscience = false;

$("#politicalscience").click(function(){
	if (politicalscience){
	$(this).attr("src", "pictures/sailaway.jpg");
	politicalscience=false;
	} else {
	$(this).attr("src", "pictures/politicalscience.jpg");
	politicalscience=true;	
	}
})


let shechoseme = false;

$("#shechoseme").click(function(){
	if (shechoseme){
	$(this).attr("src", "pictures/darkmatter.jpg");
	shechoseme=false;
	} else {
	$(this).attr("src", "pictures/shechoseme.jpg");
	shechoseme=true;	
	}
})


let godssong = false;

$("#godssong").click(function(){
	if (godssong){
	$(this).attr("src", "pictures/sailaway.jpg");
	godssong=false;
	} else {
	$(this).attr("src", "pictures/godssong.jpg");
	godssong=true;	
	}
})



})



// scripts for jquery demo */
// 
// $(document).ready(function(){
// 
// 	$("img").hide();
// 	$(".specialImage").fadeIn("slow");
// 
// 
// // create a variable (outside of function)
// 	let imgCycle = 1;
// 	
// 	
// 	$(".specialImage").click(function(){
// //		$(this).css("background-color", "purple");
// //		$(this).attr("src", "pictures/18.jpg");
// 	
// 		if(imgCycle < 20) {
// 			$(this).attr("src","pictures/"+imgCycle+".jpg");
// 			imgCycle++;
// 		} else {
// 			$(this).attr("src","pictures/"+imgCycle+".jpg");
// 			imgCycle = 1;
// 		}
// 		
// 	});
// 
// 
// 	$(".specialImage").hover(function(){
// 		$(this).attr("src","pictures/22.jpg");
// 	});
// 
// 	$(".imgAdder").click(function(){
// 		$(".end").append("<img src='pictures/8.jpg'>");
// 	});
// 
// })
