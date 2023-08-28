const clock = document.querySelector('.clock');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');
const am = document.querySelector('.am');
const pm = document.querySelector('.pm');

function initClock() {
  // show through js numbers and lines
  const numbers = clock.querySelector('.numbers');
  const lines = clock.querySelector('.lines');

  for (let i = 1; i <= 12; i++) {
    numbers.innerHTML += `<div class="number" style="--i: ${i}"><span>${i}</span></div>`;

    lines.innerHTML += `<div class="line" style="--i: ${i}"></div>`;
  }

  // call settime() here with interval
  setInterval(setTime, 1000);
}

initClock();

function setTime() {
  const now = new Date();
  // console.log(now);
  const today = now.getDay();
  // console.log(today);

  const seconds = now.getSeconds();
  // console.log(seconds);
  const secondsDegrees = (seconds / 60) * 360 + 180;
  // console.log(secondsDegrees);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 180;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 180;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // check am-pm
  if (hours >= 12) {
    am.classList.remove('active');
    pm.classList.add('active');
  } else {
    am.classList.add('active');
    pm.classList.remove('active');
  }

  // add sound
  const tick = new Audio('tick.mp3');
  // console.log(tick);
  // tick.play();
}
