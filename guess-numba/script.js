"use strict";

let secretNumber = Math.floor(Math.random() * 19) + 1;
const initialScore = 20;
let score = initialScore;
let highScore = 0;

const body = document.querySelector("body");
const numberDisplay = document.querySelector(".number");
const messageDisplay = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");
const highScoreDisplay = document.querySelector(".highscore");
const guessInput = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

function setMessage(msg) {
  messageDisplay.textContent = msg;
}

function updateScore(newScore) {
  score = newScore;
  scoreDisplay.textContent = score;
}

checkBtn.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    setMessage("Please enter a number!");
    return;
  }

  if (score <= 0) {
    setMessage("Game over! Click Again to restart.");
    return;
  }

  if (guess === secretNumber) {
    setMessage("🎉 Correct Number!");
    numberDisplay.textContent = secretNumber;
    body.style.backgroundColor = "#60b347";
    numberDisplay.style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  } else {
    setMessage(guess > secretNumber ? "Too high!" : "Too low!");
    if (score > 1) {
      updateScore(score - 1);
    } else {
      updateScore(0);
      setMessage("💥 You lost the game!");
      body.style.backgroundColor = "#b34747";
    }
  }
});

againBtn.addEventListener("click", function () {
  score = initialScore;
  secretNumber = Math.floor(Math.random() * 19) + 1;
  updateScore(score);
  setMessage("Start guessing...");
  numberDisplay.textContent = "?";
  guessInput.value = "";
  body.style.backgroundColor = "#222";
  numberDisplay.style.width = "15rem";
});
