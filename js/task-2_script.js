const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = ingredients[i];
  elements.push(listItemEl);
}

console.log(elements);

const listEl = document.querySelector("#ingredients");

listEl.append(...elements);
