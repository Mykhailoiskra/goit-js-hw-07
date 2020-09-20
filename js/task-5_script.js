const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");

function onInputChange() {
  event.currentTarget.value !== ""
    ? (nameEl.textContent = event.currentTarget.value)
    : (nameEl.textContent = "незнакомец");
  console.dir(event.currentTarget);
}

inputEl.addEventListener("input", onInputChange);
