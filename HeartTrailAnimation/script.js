const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove', (event) => {
  // console.log('test');
  // console.log(event); // MouseEvent {}
  // console.log(event.offsetX); // показывает отступ курсора мыши по оси X от края целевого DOM узла. 0 => xxx num

  const xPos = event.offsetX;
  const yPos = event.offsetY;

  // crteate exactly the same span - each time the mouse moves here create a span
  // Метод appendChild позволяет вставить в конец какого-либо другой элемент. Чаще всего используется после создания элемента с помощью createElement.
  const spanEl = document.createElement('span');

  // for diff number
  const size = Math.random() * 100; // 0 - 100
  spanEl.style.width = size + 'px';
  spanEl.style.height = size + 'px';

  // position span el
  spanEl.style.left = xPos + 'px';
  spanEl.style.top = yPos + 'px';
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
