const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
// Doda nazwę elementu jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.

const list = document.querySelector("#ingredients");

const newList = ingredients.map((item) => {
  const newElement = document.createElement("li");
  newElement.textContent = item;
  newElement.classList.add("item");
  return newElement;
});

list.append(...newList);