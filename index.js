var randomNumber1=Math.round((Math.random()*5)); //Generates a random number and rounds it.
console.log(randomNumber1);
var randomNumber2=Math.round((Math.random()*5)); //Generates a random number and rounds it.
console.log(randomNumber2);
var diceImages=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]; //An Array with all the image Names.
console.log(diceImages[randomNumber1]);
console.log(diceImages[randomNumber2]);
var images=document.querySelectorAll("img"); //Selects all img tags and stores it in an array.
images[0].setAttribute("src",diceImages[randomNumber1]); //Subtitutes the image src with the random image selected.
images[1].setAttribute("src",diceImages[randomNumber2]);//Subtitutes the image src with the random image selected.
var headerText=document.querySelector("h1");
if(randomNumber1>randomNumber2){
  headerText.innerHTML="&#128681 Player One Wins!";
}
else if (randomNumber1<randomNumber2) {
  headerText.innerHTML="Player Two Wins! &#128681";
}
else{
  headerText.innerHTML="It is a Tie! Try again.";
}
