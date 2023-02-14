const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');
const imgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');

btnEl.addEventListener('click', async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = 'Loading...';
    animeNameEl.innerText = 'Updating...';
    imgEl.src = 'loader.svg';
    const response = await fetch('https://api.catboys.com/img');
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = 'Get Anime';
    // console.log(data);
    animeContainerEl.style.display = 'block';
    imgEl.src = data.url;
    animeNameEl.innerText = data.artist;
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = 'Get Anime';
    animeNameEl.innerText = 'an error happened';
  }
});
