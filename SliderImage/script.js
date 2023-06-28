let indexValue = 1;

showSlider(indexValue);

function sliderBtn(n) {
  showSlider((indexValue = n));
}

function sideSlide(n) {
  showSlider((indexValue += n));
}

function showSlider(n) {
  var i;
  const images = document.querySelectorAll('img');
  const sliders = document.querySelectorAll('.counter span');

  if (n > images.length) {
    indexValue = 1;
  }

  if (n < 1) {
    indexValue = images.length;
  }

  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  for (i = 0; i < images.length; i++) {
    sliders[i].style.background = '#222';
  }

  images[indexValue - 1].style.display = 'block';
  sliders[indexValue - 1].style.background = '#fff';
}
