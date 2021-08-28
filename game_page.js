player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");
document.getElementById("player1_name").innerHTML=player1+" : ";
document.getElementById("player2_name").innerHTML=player2+" : ";
p1score=0;
p2score=0;
document.getElementById("player1_score").innerHTML=p1score;
document.getElementById("player2_score").innerHTML=p2score;
document.getElementById("player_question").innerHTML="Question turn -"+player1;
document.getElementById("player_answer").innerHTML="Answer turn -"+player2;
function send()
{
word=document.getElementById("word").value;
l1=word.charAt(1);
console.log(l1);
len=Math.floor(word.length/2);
l2=word.charAt(len);
console.log(l2);
minus=word.length-1;
l3=word.charAt(minus);
console.log(l3);
rp1=word.replace(l1,"_");
rp2=rp1.replace(l2,"_");
rp3=rp2.replace(l3,"_");
console.log(rp3);
questionword="<h4 id='question'> Q. "+rp3+"</h4>"; 
ipbox="<br>answer:<input type='text' id='ans'>"; 
checkbutton="<br><br><button class='btn btn-success' onclick='check()'>check</button>";
row=questionword+ipbox+checkbutton;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
questionturn="player1";
answerturn="player2";
function check()
{
getanswer=document.getElementById("ans").value;
answer=getanswer.toLowerCase();
if(answer==word)
{
if(answerturn=="player1")
{
p1score = p1score+1;
document.getElementById("player1_score").innerHTML=p1score;
}
else
{
p2score = p2score+1;
document.getElementById("player1_score").innerHTML=p2score;
}
}
if(questionturn=="player1")
{
questionturn="player2";
document.getElementById("player_question").innerHTML="Question turn -"+player2;
}
else
{
questionturn="player1";
document.getElementById("player_question").innerHTML="Question turn -"+player1;
}
if(answerturn=="player1")
{
answerturn="player2";
document.getElementById("player_answer").innerHTML="Answer turn -"+player2;
}
else
{
answerturn="player1";
document.getElementById("player_answer").innerHTML="Answer turn -"+player1;
}
document.getElementById("output").innerHTML="";
}