const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', btnFunction);
});

function btnFunction() {
  let button = this;

  button.classList.add('clicked');
}
