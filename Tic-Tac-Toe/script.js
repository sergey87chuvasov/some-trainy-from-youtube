function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  // setData(format, data), Метод DataTransfer.setData()устанавливает операцию перетаскивания drag dataдля указанных данных и типа
  event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
  event.preventDefault();

  // Метод DataTransfer.getData() извлекает данные перетаскивания (в виде строки) для указанного типа. getData(format)

  var data = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(data));
}
