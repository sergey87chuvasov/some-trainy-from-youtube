const counterEl = document.querySelector('.counter');
const loadingBarFrontEl = document.querySelector('.loading-bar-front');

// start
let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + '%';
  loadingBarFrontEl.style.width = idx + '%';

  // every time when func call
  idx++;

  if (idx < 101) {
    setTimeout(updateNum, 20);
  }
}
