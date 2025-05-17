function Account({ login, email }) {
  this.login = login;
  this.email = email;
}
Account.prototype.getInfo = function() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};
class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    this._value = str + this._value;
  }
  pad(str) {
    this._value = str + this._value + str;
  }
}
class Car {
  static getSpecs(car) {
    console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`);
  }
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}
console.log("Aufgabe 1 Tests:");
console.log(Account.prototype.getInfo);
const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
mango.getInfo();
const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
poly.getInfo();
console.log("\nAufgabe 2 Tests:");
const mangoUser = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});
mangoUser.getInfo();
const polyUser = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});
polyUser.getInfo()
console.log("\nAufgabe 3 Tests:");
const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);
const items = storage.getItems();
console.table(items); 
storage.addItem('Дроїд');
console.table(storage.items); 
storage.removeItem('Пролонгер');
console.table(storage.items); 
console.log("\nAufgabe 4 Tests:");
const builder = new StringBuilder('.');
builder.append('^');
console.log(builder.value); 
builder.prepend('^');
console.log(builder.value); 
builder.pad('=');
console.log(builder.value); 
console.log("\nAufgabe 5 Tests:");
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);
Car.getSpecs(mustang);
mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();
Car.getSpecs(mustang);
console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 