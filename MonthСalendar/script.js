const monthEl = document.querySelector('.date h1');
const fullDateEl = document.querySelector('.date p');
const daysEl = document.querySelector('.days');

const monthInd = new Date().getMonth();
// console.log(monthInd); // feb - 1 ind (current time)

const lastDay = new Date(new Date().getFullYear(), monthInd + 1, 0).getDate(); // got PREVIOUS DAY (if + 1 get last day of the curr month) // 28 feb
// console.log(lastDay); // 28

const firstDay = new Date(new Date().getFullYear(), monthInd).getDay() - 1;
// console.log(firstDay); // 2 as  in js weeks start from sunday we need -1

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'November',
  'December',
];

// console.log(month[monthInd]); // february
// Метод toDateString() возвращает часть, содержащую только дату объекта Date в виде человеко-читаемой строки на американском английском.

monthEl.innerHTML = month[monthInd];
fullDateEl.innerHTML = new Date().toDateString();

// create dynam days
let days = '';

// for empty days
for (let i = firstDay; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

daysEl.innerHTML = days;
