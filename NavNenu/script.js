let marker = document.getElementById('marker');
let list = document.querySelectorAll('ul li');

marker.style.left = 240 + 'px';
marker.style.width = 80 + 'px';

function moveIndicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
}

list.forEach((link) => {
  link.addEventListener('click', (e) => {
    moveIndicator(e.target);
  });
});

function activeLink() {
  list.forEach((item) => {
    item.classList.remove('active');
    this.classList.add('active');
  });
}

list.forEach((item) => {
  item.addEventListener('click', activeLink);
});
