
const colorRadios = document.querySelectorAll('input[name="color"]');
colorRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    document.body.style.backgroundColor = e.target.value;
  });
});
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', (e) => {
  nameOutput.textContent = e.target.value.trim() || 'незнайомець';
});
const validationInput = document.getElementById('validation-input');
validationInput.addEventListener('blur', () => {
  const requiredLength = parseInt(validationInput.dataset.length);
  const inputLength = validationInput.value.length;
  
  validationInput.classList.remove('valid', 'invalid');
  
  if (inputLength === requiredLength) {
    validationInput.classList.add('valid');
  } else if (inputLength > 0) {
    validationInput.classList.add('invalid');
  }
});
const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');
textElement.style.fontSize = `${fontSizeControl.value}px`;
fontSizeControl.addEventListener('input', (e) => {
  textElement.style.fontSize = `${e.target.value}px`;
});