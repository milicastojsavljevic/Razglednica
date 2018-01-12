var text = '**SREĆAN BOŽIĆ!**';
var stext = text.split('');

var scroll = document.getElementById('scroll');
var loop; 
function start(){
	if(stext.length > 0){
		
		scroll.innerHTML += stext.shift();
		loop = setTimeout(start,200); 
	}else {i++
	}
}
start();

//mesec
jQuery(document).ready(function($){
	$('#mesec').animate(
	{width : 100, height : 100}, //arg 1 sta se menja, ne mora u apostrofe
	 2000, // arg 2 za koliko vremena, u milisekundama
	'swing',// arg 3 nacin promene
	
	);
});