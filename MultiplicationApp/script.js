// create random number 1 - 10
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questEl = document.getElementById('question');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');

// counter for localstorage typeof num
let score = JSON.parse(localStorage.getItem('score'));

// check
if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questEl.innerText = `What is ${num1} multiple by ${num2}?`;
const correctAns = num1 * num2;

formEl.addEventListener('submit', () => {
  const userAns = +inputEl.value;

  // compare
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

// localStor memory -  number into string
function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score));
}
