const inputEl = document.getElementById('input');
const resultEl = document.getElementById('result');
const errorEl = document.getElementById('error');

// for setTime
let errorTime;
let resultTime;

function updateResults() {
  // console.log('change num'); // test info
  // console.log(inputEl.value); // get test value

  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = 'Please enter a valid number';

    clearTimeout(errorTime);

    errorTime = setTimeout(() => {
      errorEl.innerText = '';
      inputEl.value = '';
    }, 2000);
  } else {
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(1);

    clearTimeout(resultTime);

    resultTime = setTimeout(() => {
      resultEl.innerText = '';
      inputEl.value = '';
    }, 7000);
  }
}

inputEl.addEventListener('input', updateResults);
