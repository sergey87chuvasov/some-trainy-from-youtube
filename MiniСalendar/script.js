const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumberEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();

// Метод toLocaleString() возвращает строку с языкозависимым представлением даты

// monthNameEl.innerText = month; // 1
monthNameEl.innerHTML = date.toLocaleString('en', {
  month: 'long', // we can see a month
});

dayNameEl.innerText = date.toLocaleString('en', {
  weekday: 'long',
});

dayNumberEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();
