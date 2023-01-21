const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

// get data
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = 'AM';

  if (h > 12) {
    h = h - 12;
    ampm = 'PM';
  }

  // add zero 0
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hourEl.innerHTML = h;
  minuteEl.innerHTML = m;
  secondEl.innerHTML = s;

  ampmEl.innerHTML = ampm;

  // show every sec
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
