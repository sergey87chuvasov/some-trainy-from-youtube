let range = document.querySelector('.range');

// all we cant take from the body
let divider = document.querySelector('body');
// console.log(divider);

range.addEventListener('input', () => {
  let output = Math.abs(range.value);
  divider.style.setProperty('--divider', output);
});
