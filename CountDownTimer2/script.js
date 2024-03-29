let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let endDate = '01/01/2024 00:00:00';

let x = setInterval(function () {
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let distance = now - countDown;

  // calc time
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (100 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  // output result
  days.innerHTML = d + '<br><span>Days</span>';
  hours.innerHTML = h + '<br><span>Hours</span>';
  minutes.innerHTML = m + '<br><span>Minutes</span>';
  seconds.innerHTML = s + '<br><span>Seconds</span>';

  //amimate stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 365;
  mm.style.strokeDashoffset = 440 - (440 * m) / 365;
  ss.style.strokeDashoffset = 440 - (440 * s) / 365;

  // if the count down over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('time').style.display = 'none';
    document.querySelector('.newYear').style.display = 'block';
  }
});
