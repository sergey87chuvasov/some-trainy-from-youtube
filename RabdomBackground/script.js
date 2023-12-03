function changBG() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ')';
}

setInterval(changBG, 1000);
