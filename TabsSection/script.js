const tabsEl = document.querySelector('.tabs');
const btns = document.querySelectorAll('.button');
const articles = document.querySelectorAll('.content');

tabsEl.addEventListener('click', (event) => {
  // console.log(event.target); // any button tag here
  // console.log(event.target.dataset.id); // step 1-2-3
  const id = event.target.dataset.id;

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove('live');
    });
    event.target.classList.add('live');
    articles.forEach((article) => {
      article.classList.remove('live');
    });
    const element = document.getElementById(id);
    element.classList.add('live');
  }
});
