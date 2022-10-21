var card1 = document.querySelector(".card-1");
var card2 = document.querySelector(".card-2");
var card3 = document.querySelector(".card-3");
var card4 = document.querySelector(".card-4");
var card5 = document.querySelector(".card-5");
var card6 = document.querySelector(".card-6");
var card7 = document.querySelector(".card-7");
var card8 = document.querySelector(".card-8");
var card9 = document.querySelector(".card-9");
var card10 = document.querySelector(".card-10");

/* 
1. Assign each img to a variable within the cards
2. Turn the cards if they are not equal
3. Lock the cards if they are equal
4. Set up a timer when a user clicks the first ever card
5. Timer for how long the cards can be shown?
6. Log highscore
7. A new game function

*/

card1.addEventListener("click", function () {
  card1.classList.add("card-rotate");
  card1.classList.add("img-1");
});
card2.addEventListener("click", function () {
  card2.classList.add("card-rotate");
  card2.classList.add("img-2");
});
card3.addEventListener("click", function () {
  card3.classList.add("card-rotate");
  card3.classList.add("img-3");
});
card4.addEventListener("click", function () {
  card4.classList.add("card-rotate");
  card4.classList.add("img-4");
});
card5.addEventListener("click", function () {
  card5.classList.add("card-rotate");
  card5.classList.add("img-5");
});
card6.addEventListener("click", function () {
  card6.classList.add("card-rotate");
  card6.classList.add("img-6");
});
card7.addEventListener("click", function () {
  card7.classList.add("card-rotate");
  card7.classList.add("img-7");
});
card8.addEventListener("click", function () {
  card8.classList.add("card-rotate");
  card8.classList.add("img-8");
});
card9.addEventListener("click", function () {
  card9.classList.add("card-rotate");
  card9.classList.add("img-9");
});
card10.addEventListener("click", function () {
  card10.classList.add("card-rotate");
  card10.classList.add("img-10");
});
