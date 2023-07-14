const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const container = document.querySelector('.container');
const shape1 = document.querySelector('.shape1');
const shape2 = document.querySelector('.shape2');

container.addEventListener('click', () => {
  let hecColor = '#';

  for (let i = 0; i < 6; i++) {
    hecColor += hex[getRandome()];
  }

  container.style.background = hecColor;
  container.style.boxShadow = '-10px 10px 90px' + hecColor;
  shape1.style.background = hecColor;
  shape1.style.boxShadow = '-10px 10px 90px' + hecColor;
  shape2.style.background = hecColor;
  shape2.style.boxShadow = '-10px 10px 90px' + hecColor;
});

function getRandome() {
  return Math.floor(Math.random() * hex.length);
}
