const btnEl = document.querySelector('.btn');

// e - for position x,y
btnEl.addEventListener('mouseover', (event) => {
  // console.log('X', event.pageX);
  // console.log('y', event.pageY);
  // console.log(event.pageY - btnEl.offsetTop);
  // console.log(event.pageX - btnEl.offsetLeft);

  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  // change our var in css
  btnEl.style.setProperty('--xPos', x + 'px');
  btnEl.style.setProperty('--yPos', y + 'px');
});

// HTMLElement.offsetTop - возвращает расстояние текущего элемента по отношению к верхней части offsetParent узла.

// HTMLElement.offsetWidth возвращает ширину элемента. Как правило, offsetWidth — это значение, включающее горизонтальный отступ элемента, ширину вертикального скроллбара (если он есть) и CSS ширину.
