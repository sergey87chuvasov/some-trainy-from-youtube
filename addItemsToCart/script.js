let openShoping = document.querySelector('.shoping');
let closeShoping = document.querySelector('.closeShoping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShoping.addEventListener('click', () => {
  body.classList.add('active');
});

closeShoping.addEventListener('click', () => {
  body.classList.remove('active');
});

let products = [
  {
    id: 1,
    name: 'PRODUCT NAME 1',
    image: '1.PNG',
    price: 1200,
  },
  {
    id: 2,
    name: 'PRODUCT NAME 2',
    image: '2.PNG',
    price: 1800,
  },
  {
    id: 3,
    name: 'PRODUCT NAME 3',
    image: '3.PNG',
    price: 150,
  },
  {
    id: 4,
    name: 'PRODUCT NAME 4',
    image: '4.PNG',
    price: 555,
  },
  {
    id: 5,
    name: 'PRODUCT NAME 5',
    image: '5.PNG',
    price: 100,
  },
  {
    id: 6,
    name: 'PRODUCT NAME 6',
    image: '6.PNG',
    price: 999,
  },
];

let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
      <img src="./images/${value.image}" alt="item pic" />
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Card</button>
    `;
    list.appendChild(newDiv);
  });
}

initApp();
