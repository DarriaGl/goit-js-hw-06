const counterValue = document.querySelector("#value");
const counterIncreament = document.querySelector('[data-action="increment"]');
const counterDecreament = document.querySelector('[data-action="decrement"]');
let currentCounter = 0;
counterIncreament.addEventListener("click", IncreaseCount);
counterDecreament.addEventListener("click", DecreaseCount);

function IncreaseCount() {
  currentCounter += 1;
  counterValue.textContent = currentCounter;
}

function DecreaseCount() {
  currentCounter -= 1;
  counterValue.textContent = currentCounter;
}
