var cardFlipped = false;
var firstChoice = "";
var secondChoice = "";
var playing = true;

var cards = document.querySelectorAll(".card");
var win = 0;
var playAgain = document.querySelector(".new-game-box");

// function that toggles the rotate class.
function cardRotate() {
  this.classList.toggle("card-rotate");

  // If cardflipped then change to true if clicked. Then the first choice
  // will be this card.
  if (!cardFlipped) {
    cardFlipped = true;
    firstChoice = this;

    // Same but with different card.
  } else {
    cardFlipped = false;
    secondChoice = this;

    // Do cards match?

    // Every element has a dataset name. If equal. Cards will lock.
    if (firstChoice.dataset.name === secondChoice.dataset.name) {
      firstChoice.removeEventListener("click", cardRotate);
      secondChoice.removeEventListener("click", cardRotate);
      win++;
    } else {
      // Delays the statement so user can see both cards.
      setTimeout(() => {
        firstChoice.classList.add("shake");
        secondChoice.classList.add("shake");
      }, 1200);
      setTimeout(() => {
        firstChoice.classList.remove("card-rotate");
        secondChoice.classList.remove("card-rotate");
      }, 1200); // Need to make it so only 2 cards can be clicked
    }

    // If the win variable gets to 5. You won page loads.
    if (win === 5) {
      console.log("You won");
      setTimeout(() => {
        window.open("youwin.html", "_self");
      }, 1200);
    }
  }
}

// Eventlistener that uses the function for each card.
cards.forEach((card) => card.addEventListener("click", cardRotate));

// 4. Set up a timer here:

// Set up the logging of highscore
// Problems: If the page reloads. Can the highscore be saved?
// Possible solution: Never reload page, make win-overlay and just save score and reset cards.

// Set up the new game button
playAgain.addEventListener("click", function () {
  window.open("index.html", "_self");
});
