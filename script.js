var cardFlipped = false;
var firstChoice = "";
var secondChoice = "";
var playing = 0;
var win = 0;

var cards = document.querySelectorAll(".card");
var startGame = document.querySelector(".start");
var playAgain = document.querySelector(".new-game-box");
var timer = document.querySelector(".timer");
var indexPage = document.querySelector(".container");
var gameWin = document.querySelector(".game-win");
var winTime = document.querySelector(".show-time");

var dataNames = [
  "skateboard.png",
  "pingpong.png",
  "basketball.png",
  "golf.png",
  "bowling.png",
];

var cardsArr = [cards];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

console.log(cards);
// 4. Set up a timer here:
function startTimer() {
  // Set init time
  var time = Date.now();

  // Call timer at exact time
  setInterval(function () {
    var elapsedTime = Date.now() - time;
    timer.textContent = (elapsedTime / 1000).toFixed(2);
  }, 100);
}

// function that toggles the rotate class.
function cardRotate() {
  this.classList.toggle("card-rotate");
  // Add + 1 so the timer can start correctly
  playing++;
  if (playing === 1) {
    startTimer();
  }
  // Save the last time when the game is won
  var winningTime = timer.textContent;

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
      // Hide the index page and show the winning page.
      setTimeout(() => {
        indexPage.classList.add("hidden-index");
        gameWin.classList.remove("hidden");
      }, 1200);
      // Reload the index page again
      playAgain.addEventListener("click", function () {
        shuffleArray(dataNames);
        window.open("index.html", "_self");
      });
      // Show the wining time
      winTime.textContent = winningTime;
    }
  }
}

// Eventlistener that uses the function for each card.
cards.forEach((card) => card.addEventListener("click", cardRotate));
// Set up the logging of highscore
