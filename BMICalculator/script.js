const btnEl = document.getElementById('btn');
const inputResultEl = document.getElementById('bmi-result');
const weightConditionEl = document.getElementById('weight-condition');

calculateBMI();
function calculateBMI() {
  // for meter
  const inputHeightEl = document.getElementById('height').value / 100;
  const inputWeightEl = document.getElementById('weight').value;

  const bmiValue = inputWeightEl / (inputHeightEl * inputHeightEl);

  inputResultEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = 'Under Weight';
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = 'Normal Weight';
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = 'OverWeight';
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = 'Obesity';
  }
}

btnEl.addEventListener('click', calculateBMI);
