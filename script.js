var randomNumber=Math.floor(Math.random()*6)+1;
var randomImage="images/"+"dice"+randomNumber+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

//if player 1 wins
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 is the Boss!"
}
//if player 2 wins
else if (randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 is the Boss!"
}
// if both dice shows the same number
else{
    document.querySelector("h1").innerHTML="Aww, it's a Draw!"
}
