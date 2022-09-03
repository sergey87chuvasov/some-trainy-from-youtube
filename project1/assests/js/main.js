// console.log('test');

// const posts = [
//   {
//     title: 'Heading post',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem molestiae quibusdam reiciendis. Beatae quisquam aliquam doloribus, explicabo architecto dolores! Ducimus eligendi enim eos nulla placeat rerum fugiat voluptatibus aperiam.',
//   },
//   {
//     title: 'Heading post',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem molestiae quibusdam reiciendis. Beatae quisquam aliquam doloribus, explicabo architecto dolores! Ducimus eligendi enim eos nulla placeat rerum fugiat voluptatibus aperiam.',
//   },
//   {
//     title: 'Heading post',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem molestiae quibusdam reiciendis. Beatae quisquam aliquam doloribus, explicabo architecto dolores! Ducimus eligendi enim eos nulla placeat rerum fugiat voluptatibus aperiam.',
//   },
// ];

// articleSection.style.backgroundColor = 'lightBlue';

const getArticleElem = ({ title, body }) => `<article>
      <h2>${title}</h2>
      <div>
        <p>${body}</p>
      </div>
    </article>`;

async function fetchPosts() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=3'
    );

    const posts = await response.json();

    const articleSection = document.querySelector('section');

    articleSection.innerHTML = posts
      .map((post) => getArticleElem(post))
      .join('');
  } catch (error) {
    alert('error fetch', error);
  }
}

fetchPosts();
