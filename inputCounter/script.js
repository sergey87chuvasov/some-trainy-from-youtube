let textBx = document.querySelector('.textBx');
let counter = document.querySelector('.counter');
let maxlength = textBx.getAttribute('maxlength');

// Событие onkeyup возникает в момент отпускания нажатой клавиши.
textBx.onkeyup = () => {
  counter.innerText = maxlength - textBx.value.length;
};
