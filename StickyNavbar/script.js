const navbarEl = document.querySelector('.navbar');

const bottomContainerEl = document.querySelector('.bottom-container');
console.log(bottomContainerEl.offsetTop); //
console.log(navbarEl.offsetHeight); // 55

window.addEventListener('scroll', () => {
  // console.log('scrolled');
  // whats the number of the y amounts when we are scrolling
  // console.log(window.scrollY); // different numbers
  // 50 px in css
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add('active');
  } else {
    navbarEl.classList.remove('active');
  }
});

// window.scrollY - высота с начала до конца
