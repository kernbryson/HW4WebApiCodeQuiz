let questionOne = document.querySelector("#q1");
let startButton = document.querySelector("#startbutton");
let startDesc = document.querySelector("#desc");
let head = document.querySelector("#head");
let timer = document.querySelector("#timer");
let desc = document.querySelector("#desc");
let answerBtns = document.querySelector(".answer-btn");
var currentQuestion = 0;
let timeSecond = 60;
var timeLeft = 60;
let counter = 60;
var questions = [
  {
    question: "Who is Jinxes Sister?",
    answers: [
      { name: "Vi", answer: true },
      { name: "Poppy", answer: false },
      { name: "Akali", answer: false },
      { name: "Sejuani", answer: false },
    ],
  },
  {
    question: "Where does darius come from?",
    answers: [
      { name: "Bilgewater", answer: false },
      { name: "Piltover", answer: false },
      { name: "Demacia", answer: true },
      { name: "Ionia", answer: false },
    ],
  },
  {
    question: "What is Blitzcranks Q called?",
    answers: [
      { name: "Rocket Grab", answer: true },
      { name: "Gotcha", answer: false },
      { name: "Come Here", answer: false },
      { name: "Grab", answer: false },
    ],
  },
  {
    question: "Which item is no longer in the game",
    answers: [
      { name: "Moonstone Renewer", answer: false },
      { name: "Iceborn gauntlet", answer: false },
      { name: "Tiamat", answer: false },
      { name: "Rod of ages", answer: true },
    ],
  },
  {
    question: "What house was Harry Potter in?",
    answers: [
      { name: "Gryffindoor", answer: true },
      { name: "Ravenclaw", answer: false },
      { name: "Slytherin", answer: false },
      { name: "Hufflepuff", answer: false },
    ],
  },
  {
    question:
      "What attribute was removed from a character for being too explicit, then later added back?",
    answers: [
      { name: "Cigar", answer: true },
      { name: "Wine Bottle", answer: false },
      { name: "Syringe", answer: false },
      { name: "Bloody Clever", answer: false },
    ],
  },
  {
    question: "Who is Garens brother?",
    answers: [
      { name: "Akron", answer: false },
      { name: "Crownguard", answer: true },
      { name: "Darius", answer: false },
      { name: "Menard", answer: false },
    ],
  },
  {
    question: "What character says 'You belong in a museum'?",
    answers: [
      { name: "Ezreal", answer: true },
      { name: "Morgana", answer: false },
      { name: "Sylas", answer: false },
      { name: "Draven", answer: false },
    ],
  },
  {
    question: "Which of the following was not a temporary game mode?",
    answers: [
      { name: "Hexakill", answer: false },
      { name: "URF", answer: false },
      { name: "One For all", answer: false },
      { name: "Twisted Treeline", answer: true },
    ],
  },
  {
    question:
      "What character used to summon a killed enemy and control them with their ultimate?",
    answers: [
      { name: "Yorick", answer: true },
      { name: "Thresh", answer: false },
      { name: "Annie", answer: false },
      { name: "Karthus", answer: false },
    ],
  },
];
startButton.addEventListener("click", startQuiz);
function startQuiz(startQuiz) {
  // head.style.display = "none";
  head.innerHTML = questions[0].question;
  head.style.fontSize = "40px";
  startButton.style.display = "none";
  answerBtns.style.display = "flex";
  desc.style.display = "none";

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

  let questionButtons = "";
  for (ans of questions[currentQuestion].answers) {
    questionButtons +=
      "<button class='chbtn' onclick='myFunction(" +
      ans.answer +
      ")'>" +
      ans.name +
      "</button>";
  }

  answerBtns.innerHTML = questionButtons;
}
function myFunction(answer) {
  if (answer) {
    currentQuestion++;
  } else {
    alert("WRONG!");
  }
}
