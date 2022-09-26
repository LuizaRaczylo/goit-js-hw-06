const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Użyj tablicy obiektów images w celu utworzenia elementów <img> umieszczonych w <li>. Aby utworzyć znacznik użyj łańcuchów szablonowych i metody insertAdjacentHTML().

// Wszystkie elementy galerii powinny być dodawane do DOM podczas jednej operacji.
// Ulepsz galerię używając flexboxów lub gridów poprzez klasy CSS.

const list = document.querySelector(`.gallery`);
const newGallery = images
  .map(({ url, alt }) => {
    return `<li><img src = '${url}' alt = '${alt}' width=100% hight=100%><li>`;
  })
  .join("");

list.insertAdjacentHTML("afterbegin", newGallery);

document.body.style.margin = '0px';
  
  
  list.style.cssText = `display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  flex-wrap:wrap;`