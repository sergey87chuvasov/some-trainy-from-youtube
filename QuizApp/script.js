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
      console.log(questions); //  [{…}, {…}, {…}, ...  {…}, {…}]

      startscreen.classList.add('hide');
      quiz.classList.remove('hide');
      currentQuestion = 1;
      showQuestion(questions[0]);
    });
};

startBtn.addEventListener('click', startQuize);

const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');

const showQuestion = (question) => {
  const questionText = document.querySelector('.question');
  const answerWrapper = document.querySelector('.answer-wrapper');
  const questionNumber = document.querySelector('.number');

  questionText.innerHTML = question.question;

  // separate correct and incorrect answers
  const answers = [
    ...question.incorrect_answers,
    question.correct_answer.toString(),
  ];

  console.log(answers); // correct answer always last

  // lets mix the array
  answers.sort(() => Math.random() - 0.5);
  answerWrapper.innerHTML = '';
  answers.forEach((answer) => {
    answerWrapper.innerHTML += `
      <div class="answer">
            <span class="text">${answer}</span>
            <span class="checkbox">
              <span class="icon">&#10003;</span>
            </span>
          </div>
    `;
  });

  questionNumber.innerHTML = `
      Question <span class="current">${
        questions.indexOf(question) + 1
      }</span><span class="total">/${questions.length}</span>
  `;

  // work with answers
  const answerDiv = document.querySelectorAll('.answer');

  answerDiv.forEach((answer) => {
    answer.addEventListener('click', () => {
      // if answer not already submitted
      if (!answer.classList.contains('checked')) {
        // remove selected from other answer
        answerDiv.forEach((answer) => {
          answer.classList.remove('selected');
        });

        // add selected on current click
        answer.classList.add('selected');
        //after add submit btn
        submitBtn.disabled = false;
      }
    });
  });

  // when question is update - start timer
  time = timePerQuestion.value;
  startTimer(time);
};

const startTimer = (time) => {
  timer = setInterval(() => {
    if (timer >= 0) {
      progress(time);
      time--;
    } else {
      // if time finished
      checkAnswer();
    }
  }, 1000);
};

submitBtn.addEventListener('click', () => {
  checkAnswer();
});

const checkAnswer = () => {
  clearInterval(timer);

  const selectedAnswer = document.querySelector('.answer.selected');

  // any answer select
  if (selectedAnswer) {
    const answer = selectedAnswer.querySelector('.text');

    if (answer === question[currentQuestion - 1].correct_answer) {
      // if true
      score++;
      selectedAnswer.classList.add('correct');
    }
  }
};
