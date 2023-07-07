const timersBtns = document.querySelectorAll('.timer');

timersBtns.forEach((timerBtn) => {
  timerBtn.addEventListener('click', () => {
    timersBtns.forEach((timerBtn) => {
      timerBtn.classList.remove('active');
    });

    timerBtn.classList.add('active');
  });
});
