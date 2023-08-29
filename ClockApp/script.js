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

// ring alarms wjen time matches
let alarmRinging = false;

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

  let minutesString = minutes.toString();
  if (minutesString.length < 2) {
    minutesString = '0' + minutesString;
  }

  let hoursString = hours.toString();
  if (hoursString.length < 2) {
    hoursString = '0' + hoursString;
  }

  alarms.forEach((alarm) => {
    let dayMatch = false;
    alarm.days.forEach((day) => {
      if (day === today) {
        dayMatch = true;
      }
    });

    //
    if (
      alarm.time === `${hoursString}:${minutesString}` &&
      alarm.active &&
      dayMatch &&
      alarmRinging === false
    ) {
      ringAlarm();
    }
  });

  // add sound
  const tick = new Audio('tick.mp3');
  // console.log(tick);
  tick.play();
}

function ringAlarm() {
  alarmRinging = true;
  const audio = new Audio('alarm.mp3');
  audio.play();
  audio.addEventListener('ended', () => {
    alarmRinging = false;
  });
}

const alarms = [
  {
    id: 1,
    time: '22:42',
    name: 'Wake up',
    days: [0, 1, 2, 3, 4, 5, 6],
    active: true,
  },
  {
    id: 2,
    time: '12:00',
    name: 'Wake up',
    days: [0, 1, 2, 3, 4, 5],
    active: true,
  },
  {
    id: 3,
    time: '12:00',
    name: 'Wake up',
    days: [0, 1, 2, 3, 4, 5],
    active: true,
  },
  {
    id: 4,
    time: '12:00',
    name: 'Wake up',
    days: [0, 1, 2, 3, 4, 5],
    active: false,
  },
  {
    id: 5,
    time: '12:00',
    name: 'Wake up',
    days: [0, 1, 2, 3, 4, 5],
    active: false,
  },
  {
    id: 6,
    time: '12:00',
    name: 'Wake up',
    days: [0, 1, 2, 3, 4, 5],
    active: false,
  },
];

const alarmList = document.querySelector('.alarms');

function initAlarms() {
  if (alarms.length) {
    alarms.forEach((alarm) => {
      const alarmElement = document.createElement('div');
      alarmElement.classList.add('alarm');
      alarmElement.dataset.id = alarm.id;

      let alarmDays = '';
      alarm.days.forEach((day) => {
        // convert func numbers into day's first letter
        dayLetter = dayName(day);
        alarmDays += `<div class="day">${dayLetter}</div>`;
      });
      active = alarm.active ? 'checked' : '';
      alarmElement.innerHTML = `
        <div class="head">
          <div class="name">${alarm.name}</div>
        </div>
        <div class="body">
          <div class="left">
            <div class="time">${alarm.time}</div>
            <label class="toggle">
            <input type="checkbox" class="checkbox" hidden ${active}>
            <div class="track"></div>
            <div class="thumb"></div>
          </label>
          </div>
          <div class="days">
           ${alarmDays}
          </div>
        </div>
        <div class="delete">
          <img src="./icons/delete.png" alt="delete icon pic">
        </div>
      `;

      alarmList.appendChild(alarmElement);
    });
  } else {
    // if no alarm
    alarmList.innerHTML = `<div class="no-alarms">No Alarms, Click on below + button to add one</div>`;
  }
}

initAlarms();

function dayName(day) {
  return ['M', 'T', 'W', 'T', 'F', 'S', 'S'][day];
}

// delete alarm func or active - inactive
alarmList.addEventListener('click', (e) => {
  if (e.target.classList.contains('checkbox')) {
    const alarmId =
      e.target.parentElement.parentElement.parentElement.parentElement.dataset
        .id;
    // console.log(alarmId);

    const alarm = alarms.find((alarm) => alarm.id == alarmId);
    alarm.active = !alarm.active;
  }

  if (e.target.classList.contains('delete')) {
    const alarmId = e.target.parentElement.dataset.id;
    const alarm = alarms.find((alarm) => alarm.id == alarmId);
    alarms.splice(alarms.indexOf(alarm), 1);
    alarmList.innerHTML = '';
    initAlarms();
  }
});
