const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const allIngredients = ingredients.map((ingredient) => {
  const lists = document.createElement("li");
  lists.classList.add("item");
  lists.textContent = ingredient;
  return lists;
});
console.log(allIngredients);


list.append(...allIngredients);
