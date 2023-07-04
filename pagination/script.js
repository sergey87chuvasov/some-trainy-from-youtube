let indexValue = 1;
let spanNumber = document.querySelectorAll('.number span');

showColor(indexValue);

function btnSlide(n) {
  showColor((indexValue = n));
}

function sideSlide(n) {
  showColor((indexValue += n));
}

function showColor(n) {
  let i;

  if (n > spanNumber.length) {
    indexValue = 1;
  }

  if (n < 1) {
    indexValue = spanNumber.length;
  }

  for (i = 0; i < spanNumber.length; i++) {
    spanNumber[i].style.background = 'rgb(0,0,0,0.4)';
    spanNumber[i].style.transition = '.4s';
  }

  spanNumber[indexValue - 1].style.background = 'rgba(255, 0, 255)';
}

const btn = document.querySelectorAll('button');

btn.forEach((bt) => {
  bt.addEventListener('click', () => {
    btn.forEach((bt) => {
      bt.classList.remove('active');
    });
    bt.classList.add('active');
  });
});
