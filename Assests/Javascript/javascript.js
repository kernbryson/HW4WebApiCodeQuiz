let questionOne = document.querySelector("#q1");
let startButton = document.querySelector("#startbutton");
let startDesc = document.querySelector("#desc");
let head = document.querySelector("#head");
let timer = document.querySelector("#timer");
let desc = document.querySelector("#desc");
let answerBtns = document.querySelector(".answer-btn");
let pic = document.querySelector("#pic");
let buttonColor = document.getElementById("btn");
let highScores = document.querySelector("#highscores");
let header = document.querySelector(".header");
var highScoreButton = document.createElement("button");
var highScoreInput = document.createElement("textarea");
let scoreList = document.querySelector("#hslist");
let hsButtonPage = document.querySelector(".highscore");
var currentQuestion = 0;
var localItems = JSON.parse(localStorage.getItem("Highscore"));
var timeLeft = 60;
let timeInterval = "";
var highScore = [];
var questions = [
  {
    question: "What is the capital of Alabama?",
    answers: [
      { name: "Montgomery", answer: true },
      { name: "Boston", answer: false },
      { name: "Austin", answer: false },
      { name: "Bismark", answer: false },
    ],
  },
  {
    question: "What is the capital of Alaska?",
    answers: [
      { name: "Salem", answer: false },
      { name: "Indianapolis", answer: false },
      { name: "Juneau", answer: true },
      { name: "Saint Paul", answer: false },
    ],
  },
  {
    question: "What is the capital of Arizona?",
    answers: [
      { name: "Phoenix", answer: true },
      { name: "Tallahassee", answer: false },
      { name: "Oklahoma City", answer: false },
      { name: "Annapolis", answer: false },
    ],
  },
  {
    question: "What is the capital of Arkansas",
    answers: [
      { name: "Santa Fe", answer: false },
      { name: "Trenton", answer: false },
      { name: "Montpelier", answer: false },
      { name: "Little Rock", answer: true },
    ],
  },
  {
    question: "What is the capital of California?",
    answers: [
      { name: "Sacramento", answer: true },
      { name: "Austin", answer: false },
      { name: "Boise", answer: false },
      { name: "Baton Rouge", answer: false },
    ],
  },
  {
    question: "What is the capital of  Colorado",
    answers: [
      { name: "Denver", answer: true },
      { name: "Columbus", answer: false },
      { name: "Carson City", answer: false },
      { name: "Trenton", answer: false },
    ],
  },
  {
    question: "What is the capital of Connecticut?",
    answers: [
      { name: "Concord", answer: false },
      { name: "Hartford", answer: true },
      { name: "Boston", answer: false },
      { name: "Columbia", answer: false },
    ],
  },
  {
    question: "What is the capital of Georgia?",
    answers: [
      { name: "Atlanta", answer: true },
      { name: "Des Moines", answer: false },
      { name: "Montgomery", answer: false },
      { name: "Sante Fe", answer: false },
    ],
  },
  {
    question: "What is the capital of Delaware?",
    answers: [
      { name: "Helena", answer: false },
      { name: "Cheyenne", answer: false },
      { name: "Dover", answer: true },
      { name: "Austin", answer: false },
    ],
  },
  {
    question: "What is the capital of Florida?",
    answers: [
      { name: "Tallahassee", answer: true },
      { name: "Des Moines", answer: false },
      { name: "Columbus", answer: false },
      { name: "Baton Rouge", answer: false },
    ],
  },
];
//starts timer
startButton.addEventListener("click", startQuiz);
function startQuiz(startQuiz) {
  // head.style.display = "none";
  callQuestions("white");
  head.innerHTML = questions[0].question;
  head.style.fontSize = "40px";
  startButton.style.display = "none";
  answerBtns.style.display = "flex";
  desc.style.display = "none";
  states.style.display = "none";
  hsButtonPage.style.display = "none";

  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";

      timeLeft--;
    } else if (timeLeft === 1) {
      timer.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timer.textContent = "";
      clearInterval(timeInterval);
      answerBtns.innerHTML = "";
      inputHighScoresPage();
    }
  }, 1000);
}
let questionButtons = "";
function callQuestions(color) {
  if (currentQuestion < questions.length) {
    for (ans of questions[currentQuestion].answers) {
      questionButtons +=
        "<button id='btn' class='chbtn' style='background-color: " +
        color +
        "' onclick='myFunction(" +
        ans.answer +
        ")'>" +
        ans.name +
        "</button>";
      answerBtns.innerHTML = questionButtons;
    }
  } else {
  }
}
//creates the answer buttons
function myFunction(answer) {
  if (answer) {
    currentQuestion++;
    questionButtons = "";
    answerBtns.innerHTML = "";
    head.innerHTML = "";
    if (currentQuestion < questions.length) {
      callQuestions("white");
      head.innerHTML = questions[currentQuestion].question;
    } else {
      inputHighScoresPage();
    }
  } else {
    timeLeft -= 10;
    questionButtons = "";
    answerBtns.innerHTML = "";
    callQuestions("red");
    setTimeout(() => {
      questionButtons = "";
      answerBtns.innerHTML = "";
      callQuestions("white");
    }, 700);
  }
}
//shows user their high score and allows user to input initials
function inputHighScoresPage() {
  highScoreInput.className = "hsinput";

  highScoreButton.className = "hsbutton";
  highScoreButton.innerText = "Input Score";
  head.innerHTML = "Your score is " + (timeLeft += 1);
  highScoreInput.innerText = "Put you initials here!";
  clearInterval(timeInterval);
  header.append(highScoreInput);
  header.append(highScoreButton);
  highScoreButton.addEventListener("click", highScoreRoster);
  currentQuestion = "";
}
//shows highscores
function highScoreRoster() {
  head.innerHTML = "High Scores";
  highScoreButton.style.display = "none";
  highScoreInput.style.display = "none";
  getHighScore();
}
hsButtonPage.addEventListener("click", hsDirect);
function hsDirect() {
  head.innerHTML = "High Scores";
  desc.style.display = "none";
  states.style.display = "none";
  startButton.style.display = "none";
  if (localItems) {
    for (i = 0; i < localItems.length; i++) {
      var li = document.createElement("li");
      scoreList.appendChild(li);
      li.append(
        localItems[i].initials + " - " + localItems[i].score + " Points!"
      );
    }
  }
}
function getHighScore() {
  scoreSave();
  if (localItems) {
    for (i = 0; i < localItems.length; i++) {
      var li = document.createElement("li");
      li.className = "liclass";
      scoreList.appendChild(li);
      li.append(
        localItems[i].initials + " - " + localItems[i].score + " Points!"
      );
    }
  } else {
    for (i = 0; i < highScore.length; i++) {
      var li = document.createElement("li");
      li.className = "liclass";
      scoreList.appendChild(li);
      li.append(
        highScore[i].initials + " - " + highScore[i].score + " Points!"
      );
    }
  }
}
//saves scores
function scoreSave() {
  if (localItems) {
    highScore = localItems;
  }
  highScore.push({ initials: highScoreInput.value, score: timeLeft });
  localStorage.setItem("Highscore", JSON.stringify(highScore));
}
