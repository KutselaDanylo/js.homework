// const bankAccount = {
//   ownerName: "Іван Іванов",
//   accountNumber: "UA1234",
//   balance: 1000,
//   deposit(amount) {
//     this.balance +=amount;
//     alert(`Поповнення успішне. Новий баланс: ${this.balance} грн`);
//   },
//   withdraw(amount) {
//     if (amount <= this.balance) {
//       this.balance -=amount;
//       alert(`Зняття успішне. Новий баланс: ${this.balance} грн`);
//     } else {
//       alert("Недостатньо коштів на рахунку.");
//     }
//   },
// }
// if (confirm("Бажаєте поповнити рахунок?")) {
//   const amount = Number(prompt("Введіть суму для поповнення:"));
//   if (!isNaN(amount)) bankAccount.deposit(amount);
// } else if (confirm("Бажаєте зняти гроші з рахунку?")) {
//   const amount = Number(prompt("Введіть суму для зняття:"))
//   if (!isNaN(amount)) bankAccount.withdraw(amount);
// }
// const weather ={
//   temperature: 0,
//   humidity: 60,
//   windSpeed: 15,
//   isFreezing() {
//     return this.temperature < 0
//   },
// }
// const tempInput =Number(prompt("Введіть температуру:"))
// if (!isNaN(tempInput)){
//   weather.temperature = tempInput;
//   if (weather.isFreezing()){
//     alert("Температура нижче 0 градусів Цельсія")
//   } else {
//     alert("Температура вище або рівна 0 градусів Цельсія")
//   }
// }
// const user ={
//   name: "Олена",
//   email: "olena@example.com",
//   password: "qwerty123",
//   login(inputEmail, inputPassword) {
//     return this.email === inputEmail && this.password === inputPassword;
//   },
// };
// const emailInput = prompt("Введіть email:");
// const passwordInput = prompt("Введіть пароль:");
// if (user.login(emailInput, passwordInput)){
//   alert("Вхід успішний!");
// } else {
//   alert("Неправильний email або пароль.")
// }
// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
//   rating: 8.8,

//   isHighlyRated() {
//     return this.rating > 8;
//   },
// };
// console.log("Назва:", movie.title)
// console.log("Режисер:", movie.director);
// console.log("Рік:", movie.year);
// console.log("Рейтинг:", movie.rating)
// console.log("Фільм має високий рейтинг:", movie.isHighlyRated());
