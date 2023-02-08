const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = 'SUFN2mzir0+TX2lTGH2qXg==Z00GJG0eDUilBxBi';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {
  try {
    // preload
    jokeEl.innerText = 'Updating...';
    btnEl.disabled = true;
    btn.innerText = 'Loading...';

    const response = await fetch(apiURL, options);
    const data = await response.json();

    // console.log(data); // [{…}]
    // console.log(data[0].joke); // I heard there is a new shop called Moderation. They have everything in there.

    // after get a joke
    btnEl.disabled = false;
    btn.innerText = 'Click for a Joke';

    // output joke
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = 'AN ERROR HAPPENED, TRY AGAIN LATER';
    // console.log(error);

    // FO NORMAL BTN
    btnEl.disabled = false;
    btn.innerText = 'Click for a Joke';
  }
}

btnEl.addEventListener('click', getJoke);
