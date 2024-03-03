const form = document.getElementById('form');
const email = document.getElementById('email');
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

email.addEventListener('input', () => {
  if (email.value.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
  } else {
    form.classList.add('invalid');
    form.classList.remove('valid');
  }

  if (email.value == '') {
    form.classList.remove('invalid');
    form.classList.remove('valid');
  }
});
