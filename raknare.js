function check(){

var fraga1 = document.quiz.fraga1.value;
var fraga2 = document.quiz.fraga2.value;
var fraga3 = document.quiz.fraga3.value;
var fraga4 = document.quiz.fraga4.value;


var correct = 0;

if (fraga1 == "tesla"){
	correct++;
}
if (fraga2 == "volvo"){
	correct++;
}
if (fraga3 == "audi"){
	correct++;
}
if (fraga4 == "koenigsegg"){
	correct++;
}

document.getElementById("efter_svar").style.visibility = "visible";
document.getElementById("antal_ratt").innerHTML = "Du fick " + correct + " rätt!";
	
}