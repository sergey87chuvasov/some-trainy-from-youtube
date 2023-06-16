let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('nav a');

// Событие onscroll происходит при прокручивании содержимого веб-страницы. Синтаксис. window.onscroll="<функция>".
// scrollY —  Возвращает число пикселей, на которое документ пролистали в данный момент по вертикали
// HTMLElement.offsetTop -  возвращает расстояние текущего элемента по отношению к верхней части offsetParent узла.
// HTMLElement.offsetHeight- высота элемента с учётом вертикальных полей и границ в пикселях.

window.onscroll = () => {
  sec.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 60;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      links.forEach((link) => {
        link.classList.remove('active');
        document
          .querySelector('nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};
