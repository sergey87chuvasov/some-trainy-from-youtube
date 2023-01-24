const containerEl = document.querySelector('.container');

// create item
for (let index = 0; index < 32; index++) {
  const colorContainerEl = document.createElement('div');
  colorContainerEl.classList.add('color-container');
  containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll('.color-container');
// console.log(colorContainerEls); // node 30

generateColors();

function generateColors() {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    // console.log(newColorCode);
    colorContainerEl.style.backgroundColor = '#' + newColorCode;
    colorContainerEl.innerHTML = '#' + newColorCode;
  });
}

function randomColor() {
  // символы
  const chars = '0123456789abcdef';
  const colorCodeLength = 6;

  let colorCode = '';
  for (let index = 0; index < colorCodeLength; index++) {
    // 0 - 30
    const randomNum = Math.floor(Math.random() * chars.length);
    // console.log(randomNumber); // 6 numbers
    colorCode += chars.substring(randomNum, randomNum + 1);
    // console.log(colorCode, randomNumber);
  }
  return colorCode;
}
