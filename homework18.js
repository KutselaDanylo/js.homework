const categories = document.querySelectorAll('#categories .item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
  const title = category.querySelector('h3').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Категорія: ${title}\nКількість елементів: ${itemsCount}`);
});
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const ingredientsList = document.querySelector('#ingredients');
const ingredientElements = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});
ingredientsList.append(...ingredientElements);
const images = [
  {
    url: '',
    alt: '',
  },
  {
    url: '',
    alt: '',
  },
  {
    url: '',
    alt: '',
  },
];

const gallery = document.querySelector('#gallery');
const galleryMarkup = images.map(({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}"></li>`
).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
let counterValue = 0;
const counterDisplay = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  counterDisplay.textContent = counterValue;
});

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  counterDisplay.textContent = counterValue;
});