var dice1 = Math.random();

dice1 = dice1 * 6;

dice1 = Math.round(dice1) + 1;

var randomDiceImage = "dice" + dice1 + ".png";

var randomImageSource ="images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

dice2 = Math.floor(Math.random()* 6) + 1;

var randomDiceImage2 = "dice" + dice2+ ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if(dice1 > dice2){
  document.querySelector("h1").innerHTML ="🚩Player 1 wins";
}else if(dice2 > dice1){
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}else if(dice1 === dice2){
  document.querySelector("h1").innerHTML = "Draw";
}
