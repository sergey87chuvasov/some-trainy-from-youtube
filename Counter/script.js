let num = 0;
const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    // console.log(event.currentTarget); // show us button which we clicked
    const styles = event.currentTarget.classList;

    if (styles.contains('btn-danger')) {
      num--;
    } else if (styles.contains('btn-success')) {
      num++;
    } else {
      num = 0;
    }

    value.textContent = num;

    // colors
    if (num > 0) {
      value.style.color = 'green';
    } else if (num < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
  });
});
