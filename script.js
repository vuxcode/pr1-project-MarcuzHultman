/* VARIABLES */

// Setting initial values (did as i went)
var cardFlipped = false;

var firstChoice = "";
var secondChoice = "";
var playing = 0;
var win = 0;
var score;
var scores = [];

// Choosing the card element
var cards = document.querySelectorAll(".card");

// HTML variables
var startGame = document.querySelector(".start");
var playAgain = document.querySelector(".new-game-box");
var timer = document.querySelector(".timer");
var indexPage = document.querySelector(".container");
var gameWin = document.querySelector(".game-win");
var winTime = document.querySelector(".show-time");
var lastScore = document.querySelector(".lastscore");

// Pushing the cards inside and array so I can iterate through it later
var cardsArr = [];
cardsArr.push(cards);

// Getting the images
var image1 = document.querySelector(".c1");
var image2 = document.querySelector(".c2");
var image3 = document.querySelector(".c3");
var image4 = document.querySelector(".c4");
var image5 = document.querySelector(".c5");
var image6 = document.querySelector(".c6");
var image7 = document.querySelector(".c7");
var image8 = document.querySelector(".c8");
var image9 = document.querySelector(".c9");
var image10 = document.querySelector(".c10");

// Array for the images
var backCards = [];
// Pushing the images inside the array
backCards.push(image1);
backCards.push(image2);
backCards.push(image3);
backCards.push(image4);
backCards.push(image5);
backCards.push(image6);
backCards.push(image7);
backCards.push(image8);
backCards.push(image9);
backCards.push(image10);

/* SHUFFLING SECTION */

// Shuffle function (fishey-yates shuffle)
function shuffle(array) {
  // Setting i to length value
  var i = array.length,
    j = 0,
    // having a temporary holder that has random number
    temp;
  // loop the goes -- from i
  while (i--) {
    // J gets a random number
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    // array[i] = 10 (current number), swaps the current number with J (randomnumber) and the temp holds is
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
// Made an array of 5 pairs
var shuffledImages = shuffle([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);

// Loop that iterates through the shuffledIMages array and then assign each to different places (by changing the src (image))
for (var r = 0; r < shuffledImages.length; r++) {
  backCards[r].src = `img/card${shuffledImages[r]}.png`;
  cards[r].dataset.name = shuffledImages[r];
}

console.log(shuffledImages);

/* TIMER */

function startTimer() {
  // Set init tim
  var time = Date.now();

  // Call timer at exact time
  setInterval(function () {
    var elapsedTime = Date.now() - time;
    timer.textContent = (elapsedTime / 1000).toFixed(2);
  }, 100);
}

function saveLastscore() {
  var winningTime = timer.textContent;
  winTime.textContent = winningTime;
  localStorage.setItem("lastscore", winningTime);
}
//   // hscore = localStorage.getItem("highscore");
// }
// function saveHighscore() {
//   var winningTime = timer.textContent;
//   winTime.textContent = winningTime;
//   localStorage.setItem("highscore", winningTime);

//   if (highscore > score) {
//     score = highscore;
//   }

//   // hscore = localStorage.getItem("highscore");
// }
// var highscore;
var lastscore;

score = Number(localStorage.getItem("lastscore"));
// highscore = localStorage.getItem("highscore");
lastScore.innerHTML = score;
console.log(score);

var lock = false;

/* MAIN GAME FUNCTION */

// function that toggles the rotate class.
function cardRotate() {
  if (lock) return;
  this.classList.toggle("card-rotate");

  // Add + 1 so the timer can start correctly
  playing++;
  if (playing === 1) {
    startTimer();
  }

  // If cardflipped then change to true if clicked. Then the first choice
  // will be this card.

  if (!cardFlipped) {
    cardFlipped = true;
    firstChoice = this;
    console.log(firstChoice.dataset.name);

    // Same but with different card.
  } else {
    cardFlipped = false;
    secondChoice = this;
    console.log(secondChoice.dataset.name);

    // Every element has a dataset name. If equal. Cards will lock.
    if (firstChoice.dataset.name === secondChoice.dataset.name) {
      firstChoice.removeEventListener("click", cardRotate);
      secondChoice.removeEventListener("click", cardRotate);
      win++;
    } else {
      lock = true;
      // Delays the statement so user can see both cards.
      setTimeout(() => {
        firstChoice.classList.add("shake");
        secondChoice.classList.add("shake");
      }, 800);
      setTimeout(() => {
        firstChoice.classList.remove("card-rotate");
        secondChoice.classList.remove("card-rotate");
        lock = false;
      }, 800); // Need to make it so only 2 cards can be clicked
    }

    // If the win variable gets to 5. You won page loads.
    if (win === 5) {
      // Show the winning time
      // winTime.textContent = winningTime;
      saveLastscore();
      saveHighscore();

      // Hide the index page and show the winning page.
      setTimeout(() => {
        indexPage.classList.add("hidden-index");
        gameWin.classList.remove("hidden");
      }, 1200);
      // Reload the index page again
      playAgain.addEventListener("click", function () {
        window.top.location = window.top.location;
      });
    }
  }
  bug();
}

// Eventlistener that uses the function for each card.
cards.forEach((card) => card.addEventListener("click", cardRotate));
