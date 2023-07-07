const timersBtns = document.querySelectorAll('.timer');

timersBtns.forEach((timerBtn) => {
  timerBtn.addEventListener('click', () => {
    timersBtns.forEach((timerBtn) => {
      timerBtn.classList.remove('active');
    });

    timerBtn.classList.add('active');
  });
});

// countdown
const showTimer = document.querySelector('.countdown-value');
let counter;
const resetBtn = document.querySelector('.submitbtn');

function countDown(duration) {
  let stTime = duration * 60;
  let displaySecond;

  counter = setInterval(function () {
    const minutes = Math.floor(stTime / 60);
    const seconds = stTime % 60;

    if (seconds < 10) {
      displaySecond = '0' + seconds.toString();
    } else {
      displaySecond = seconds.toString();
    }

    showTimer.innerHTML = minutes + ':' + displaySecond;
    stTime--;

    if (stTime <= 0) {
      clearInterval(counter);
      showTimer.innerHTML = 'Complete!';
      showTimer.classList.add('active');
    }
    resetBtn.classList.add('active');
  }, 1000);

  showTimer.innerHTML = '00:00';
  showTimer.classList.remove('active');
}

function reset() {
  clearInterval(counter);
  showTimer.innerHTML = '00:00';
  resetBtn.classList.remove('active');
  showTimer.classList.remove('active');
}
