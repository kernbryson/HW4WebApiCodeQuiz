let questionOne = document.querySelector("#q1");
let startButton = document.querySelector("#startbutton");
let startDesc = document.querySelector("#desc");
let head = document.querySelector("#head");
let timer = document.querySelector("#timer");
let desc = document.querySelector("#desc");
let timeSecond = 60;
let counter = 60;
var questions = [
  {
    question: "What house was Harry Potter in?",
    answers: ["Gryffindoor", "Ravenclaw", "Slytherin", "Hufflepuff"],
    answer: 0,
  },
  {
    question: "What was Hermione's cat's name?",
    answers: ["Crookshanks", "Peter Pettigrew", "Scabbers", "Harry"],
    answer: 0,
  },
];
startButton.addEventListener("click", startQuiz);
var timeLeft = 60;
function startQuiz(startQuiz) {
  head.style.display = "none";
  startButton.style.display = "none";
  desc.style.display = "none";
  head.innerHTML = JSON.stringify(questions[0]);

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";

      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timer.textContent = "";

      clearInterval(timeInterval);
    }
  }, 1000);
}
