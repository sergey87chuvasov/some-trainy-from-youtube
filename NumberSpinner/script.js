let x = 0;
let output = document.getElementById('output');
let meter = document.getElementById('meter');

output.innerHTML = x;

function plus() {
  if (x >= 10) {
    return false;
  }

  output.innerHTML = ++x;
}

function minus() {
  if (x <= 0) {
    return false;
  }

  output.innerHTML = --x;
}
