player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
var player1_score=1;
var player2_score=2;
document.getElementById("player1_name").innerHTML=player1_name+":"
document.getElementById("player2_name").innerHTML=player2_name+":"
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="queston"+player1_name;
document.getElementById("player_answer").innerHTML="answer"+player2_name

function send() {
	get_word = document.getElementById("word").value;
	word = get_word.toLowerCase();
	console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
	console.log(charAt1);

	lenght_divide_2 = Math.floor(word.length/2);
	charAt2 = word.charAt(lenght_divide_2);
	console.log(charAt2);

    lenght_minus_1 = word.length - 1; 
    charAt3 = word.charAt(lenght_minus_1); 
	console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
	console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> P. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
var TURNO_DE_PREGUNTAR="player1";
var TURNO_DE_RESPONDER="player2";

 function check(){
var ABC=document.getElementById("input_check_box").value;
hola=ABC.toLowerCase();
if(hola==word){
if (TURNO_DE_RESPONDER=="player1") {
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
} else {
 player2_score=player2_score+1;
 document.getElementById("player2_score").innerHTML=player2_score;
}
if (TURNO_DE_PREGUNTAR=="player2") {
TURNO_DE_PREGUNTAR="player1";
 document.getElementById("player_question").innerHTML="AHORA PREGUNTA TU"+player1_name;
} else {TURNO_DE_PREGUNTAR="player2";document.getElementById("player_question").innerHTML="VAS TU DE NUEVO"+player2_name;}
if (TURNO_DE_RESPONDER=="player1"){
TURNO_DE_RESPONDER="player2";
document.getElementById("player_question").innerHTML="I_LOVE_MY_MOM"+player2_name;
}
if (TURNO_DE_RESPONDER=="player2"){
TURNO_DE_RESPONDER="player1";
document.getElementById("player_question").innerHTML="I_LOVE_MY_MOM"+player1_name;
}
}
document.getElementById("output").innerHTML = "";
 }