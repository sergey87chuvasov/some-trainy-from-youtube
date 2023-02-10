const ratingEls = document.querySelectorAll('.rating');
const btnEl = document.getElementById('btn');
const containerEl = document.getElementById('container');

let selectedRating = '';

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener('click', (event) => {
    removeActive();

    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    console.log(selectedRating);

    // console.log(event.target.innerText || event.target.parentNode.innerText); // to get text witch click on emoji
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
  });
});

btnEl.addEventListener('click', () => {
  if (selectedRating !== '') {
    containerEl.innerHTML = `
      <strong>Thanks !!!</strong>
      <br>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>See you next Time</p>
    `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove('active');
  });
}
