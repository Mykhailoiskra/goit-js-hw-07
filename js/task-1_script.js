const totalCategories = document.querySelectorAll(".item");
console.log(`В списке ${totalCategories.length} категории.`);
console.log(totalCategories);

totalCategories.forEach((item) =>
  console.log(
    `Категория: ${item.querySelector("h2").textContent}, 
Количество элементов: ${item.querySelectorAll("li").length} `
  )
);
