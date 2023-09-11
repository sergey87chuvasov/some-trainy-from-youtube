let colorIndicator = document.getElementById('color-indicator');

var colorPicker = new iro.ColorPicker('#color-picker', {
  width: 180,
  color: '#fff',
});

colorPicker.on('color:change', function (color) {
  colorIndicator.style.backgroundColor = color.hexString;
});
