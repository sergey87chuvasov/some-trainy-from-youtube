const wrapper = document.querySelector('.wrapper');
const selectBtn = wrapper.querySelector('.select-btn');
const options = wrapper.querySelector('.options');
const searchInp = wrapper.querySelector('input');

let countries = [
  'Argentina',
  'Austria',
  'Azerbaijan',
  'Belarus',
  'Belgium',
  'Brazil',
  'Bulgaria',
  'Canada',
  'Cameroon',
  'Chile',
  'China',
  'Colombia',
  'Estonia',
  'Finland',
  'Georgia',
  'Greece',
  'Iceland',
  'Italy',
  'Kazakhstan',
  'Latvia',
  'Liechtenstein',
  'Luxembourg',
  'Paraguay',
  'Romania',
  'Spain',
  'Sweden',
  'Switzerland',
  'Thailand',
  'Turkey',
  'Ukraine',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
];

function addCountry(selectedCountry) {
  options.innerHTML = '';
  countries.forEach((country) => {
    // if selected country and country value is same then add selected class
    let isSelected = country == selectedCountry ? 'selected' : '';
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;

    options.insertAdjacentHTML('beforeend', li);
  });
}

addCountry();

function updateName(selectedLi) {
  searchInp.value = '';
  addCountry(selectedLi.innerText);
  wrapper.classList.remove('active');
  // console.log(selectedLi.innerText);
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener('keyup', () => {
  let arr = [];
  // console.log(searchInp.value);
  let searchVal = searchInp.value.toLowerCase();

  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchVal);
    })
    .map((data) => `<li onclick="updateName(this)">${data}</li>`)
    .join('');

  // console.log(arr);

  options.innerHTML = arr ? arr : `<p>Oopps! Country not found!</p>`;
});

selectBtn.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});
