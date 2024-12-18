function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let celsiusValue = 25; 
let fahrenheitValue = celsiusToFahrenheit(celsiusValue); 
console.log(`${celsiusValue}°C is ${fahrenheitValue}°F`);

fahrenheitValue = 77; 
celsiusValue = fahrenheitToCelsius(fahrenheitValue);
console.log(`${fahrenheitValue}°F is ${celsiusValue}°C`);

const daysInMonths = (30);
const hoursInMonths = (daysInMonths * 24);
const minitsInMonths = (hoursInMonths * 60);
console.log(daysInMonths);
console.log(hoursInMonths);
console.log(minitsInMonths);

const helth =(100);
const energy =(100);
console.log(helth - 30);
console.log((energy - 90));

const totalPrice =(50);
const discountetPrice = (totalPrice * 0.9);
console.log(discountetPrice);

const floutNumber = (12.78);  
const roundetDown =(Math.floor(floutNumber));
console.log(roundetDown);

const floteString =(45.67);
const parsedFloat =(Number.parseFloat(floteString));
console.log(parsedFloat);

const intString =(123);
const parsendInt =(Number.parseInt(intString));
console.log(parsendInt);

const number =(Math.sqrt(4));
const sqrtNumber =(number);
console.log(sqrtNumber);