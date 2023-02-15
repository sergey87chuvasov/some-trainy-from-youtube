const btnEl = document.getElementById('btn');
const nameEl = document.getElementById('name');

const keyAPI = 'e52dec275ffad615fe3d9c58c0895e3572344ee5';

const emoji = [];

async function getEmoji() {
  let response = await fetch(
    `https://emoji-api.com/emojis?access_key=${keyAPI}`
  );

  let data = await response.json();
  // console.log(data); get array of objs

  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

// console.log(emoji);

btnEl.addEventListener('click', () => {
  // random num
  const randomNum = Math.floor(Math.random() * emoji.length);
  // console.log(randomNum);

  btnEl.innerText = emoji[randomNum].emojiName;
  nameEl.innerText = emoji[randomNum].emojiCode;
});
