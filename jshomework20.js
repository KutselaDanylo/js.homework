const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const renderBtn = controls.querySelector('[data-action="render"]');
const destroyBtn = controls.querySelector('[data-action="destroy"]');
const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
  destroyBoxes();
  const boxes = [];
  let size = 30;
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    box.textContent = i + 1;
    boxes.push(box);
    size += 10;
  }
  
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

renderBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyBtn.addEventListener('click', destroyBoxes);