var counter = 0;
var firstChoice = "";
var secondChoice = "";

var cards = document.querySelectorAll(".card");
var backFace = document.querySelectorAll(".back-face");

function cardRotate() {
  this.classList.toggle("card-rotate");
}

cards.forEach((card) => card.addEventListener("click", cardRotate));

/*
1. Assign each img to a variable within the cards
2. Turn the cards if they are not equal
3. Lock the cards if they are equal
4. Set up a timer when a user clicks the first ever card
5. Timer for how long the cards can be shown?
6. Log highscore
7. A new game function

*/
