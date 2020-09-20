let counterValue = 0;

function increment() {
  return (counterValue += 1);
}

function decrement() {
  return (counterValue -= 1);
}

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", function () {
  increment();
  valueEl.textContent = counterValue;
});

decrementBtn.addEventListener("click", function () {
  decrement();
  valueEl.textContent = counterValue;
});
