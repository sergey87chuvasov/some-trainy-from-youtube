console.log('test');

const posts = [
  {
    title: 'Heading post',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem molestiae quibusdam reiciendis. Beatae quisquam aliquam doloribus, explicabo architecto dolores! Ducimus eligendi enim eos nulla placeat rerum fugiat voluptatibus aperiam.',
  },
  {
    title: 'Heading post',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem molestiae quibusdam reiciendis. Beatae quisquam aliquam doloribus, explicabo architecto dolores! Ducimus eligendi enim eos nulla placeat rerum fugiat voluptatibus aperiam.',
  },
  {
    title: 'Heading post',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem molestiae quibusdam reiciendis. Beatae quisquam aliquam doloribus, explicabo architecto dolores! Ducimus eligendi enim eos nulla placeat rerum fugiat voluptatibus aperiam.',
  },
];

const getArticleElem = ({ title, content }) => `<article>
      <h2>${title}</h2>
      <div>
        <p>${content}</p>
      </div>
    </article>`;

const articleSection = document.querySelector('section');
articleSection.style.backgroundColor = 'lightBlue';

// articleSection.innerHTML = getArticleElem(posts[0]);

articleSection.innerHTML = posts.map((post) => getArticleElem(post)).join('');
