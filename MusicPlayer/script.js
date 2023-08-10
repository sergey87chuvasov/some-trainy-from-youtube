let length = document.querySelector('.length');
let playBtn = document.querySelector('.play');
let audio = document.querySelector('.music');

audio.onloadedmetadata = function () {
  length.max = audio.duration;
  length.value = audio.currentTime;
};

playBtn.addEventListener('click', () => {
  if (playBtn.classList.contains('bx-pause')) {
    audio.pause();
    playBtn.classList.remove('bx-pause');
    playBtn.classList.add('bx-play');
  } else {
    audio.play();
    playBtn.classList.add('bx-pause');
    playBtn.classList.remove('bx-play');
  }
});

setInterval(() => {
  length.value = audio.currentTime;
}, 500);

length.addEventListener('change', () => {
  audio.play();
  audio.currentTime = length.value;
  playBtn.classList.add('bx-pause');
  playBtn.classList.remove('bx-play');
});
