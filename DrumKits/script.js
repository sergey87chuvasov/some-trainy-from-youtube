const kits = ['crash', 'kick', 'snare', 'tom'];
const containerEl = document.querySelector('.container');

kits.forEach((kit) => {
  const btnEl = document.createElement('button');
  btnEl.classList.add('btn');
  btnEl.innerHTML = kit;
  btnEl.style.backgroundImage = 'url(./img/' + kit + '.png)';
  containerEl.appendChild(btnEl);

  // create audioEl
  const audioEl = document.createElement('audio');
  audioEl.src = './samples/' + kit + '.mp3';
  containerEl.appendChild(audioEl);

  btnEl.addEventListener('click', () => {
    audioEl.play();
  });

  // play with buttons
  window.addEventListener('keydown', (event) => {
    // console.log(event.key);
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = 'scale(.9)';
      setTimeout(() => {
        btnEl.style.transform = 'scale(1)';
      }, 100);
    }
  });
});
