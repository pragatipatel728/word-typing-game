const currentWord = document.getElementById("current-word");
const wordInput = document.getElementById("word-input");
const message = document.getElementById("message");
const time = document.getElementById("time");
const scoreField = document.getElementById("score");
const word = [
  "hat",
  "river",
  "lucky",
  "statue",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "defintion",
];
let timer = 5;
let score = 0;
let isPlaying = false;

window.addEventListener("load", startGame);
function startGame() {
  showWord(word);
  setInterval(counter, 1000);
  setInterval(showMessage, 50);
  wordInput.addEventListener("input", startMatch);
}

function showWord(word) {
  var index = Math.floor(Math.random() * word.length);
  currentWord.innerHTML = word[index];
}

function counter() {
  if (timer > 0) timer--;
  time.innerHTML = timer;
}
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!";
    return true;
  } else {
    message.innerHTML = "InCorrect!!!";
    return false;
  }
}
function startMatch() {
  if (matchWords()) {
    timer = 5;
    wordInput.value = "";
    showWord(word);
    score++;
    scoreField.innerHTML = score;
  }
}
function showMessage() {
  if (timer === 0 && !isPlaying) message.innerHTML = "Game Over";
}
