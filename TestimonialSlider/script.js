const testimonials = [
  {
    name: '- Valentin R.',
    photoUrl:
      'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    text: 'Buy this now. I wish I would have thought of it first. Apple did exactly what you said it does.',
  },
  {
    name: '- Rick E.',
    photoUrl:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    text: 'This is unbelievable. After using Testiminial Generator my buisness skyrocketed!',
  },
  {
    name: '- Roze D.',
    photoUrl:
      'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    text: 'We have used apple for the last five years. I could probably go into sales for you. It is just amazing. I did not even need training',
  },
];

const imgEl = document.querySelector('img');
const textEl = document.querySelector('.text');
const usernameEl = document.querySelector('.username');

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;

  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 2000);
}
