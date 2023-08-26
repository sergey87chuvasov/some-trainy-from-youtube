const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('.progress-text');

const progress = (value) => {
  const percentage = (value / time) * 100;
  progressBar.style.width = `${percentage}%`;
  progressText.innerHTML = `${value}`;
};

let questions = [];
let time = 30;
let score = 0;
let currentQuestion;
let timer;

const startBtn = document.querySelector('.start');
const numQuestions = document.querySelector('#num-questions');
const category = document.querySelector('#category');
const difficulty = document.querySelector('#difficulty');
const timePerQuestion = document.querySelector('#time');
const quiz = document.querySelector('.quiz');
const startscreen = document.querySelector('.start-screen');

const startQuize = () => {
  const num = numQuestions.value;
  const cat = category.value;
  const diff = difficulty.value;

  // api
  const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      questions = data.results;
      console.log(questions); // (5) [{…}, {…}, {…}, {…}, {…}]
    });
};

startBtn.addEventListener('click', startQuize);
