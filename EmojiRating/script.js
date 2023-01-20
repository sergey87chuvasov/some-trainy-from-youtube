const starsEl = document.querySelectorAll('.fa-star');
// console.log(starsEl); // NodeList(5) [i.fa-solid.fa-star.fa-2x.active...

const emojisEl = document.querySelectorAll('.fa-regular');

const colorsArray = ['red', 'orange', 'brown', 'lightgreen', 'green'];

// default
updateRaiting(2);

starsEl.forEach((starEl, index) => {
  starEl.addEventListener('click', () => {
    // console.log('click', index);

    updateRaiting(index);
  });
});

function updateRaiting(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add('active');
    } else {
      starEl.classList.remove('active');
    }
  });
  // change emoji
  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index];
  });
}
