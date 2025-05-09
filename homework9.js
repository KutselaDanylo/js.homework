// function logItems(array){
//     for (let i = 0; i < array.length; i++){
//       console.log(`${i + 1} - ${array[i]}`)
// }
// }
// function calculateEngravingPrice(message, pricePerWord){
//   const words = message.split(' ');
//   return words.length * pricePerWord
// }
// function findLongestWord(string){
//     const words = string.split(' ');
//     let longest = words[0];
  
//     for (const word of words){
//       if (word.length > longest.length){
//         longest = word;
// }
// } 
//     return longest;
// }
// function formatString(string) {
//     return string.length <= 40 ? string : string.slice(0, 40) + '...';
// }
// function checkForSpam(message){
//     const lowerCaseMessage = message.toLowerCase()
//     return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
// }
// const numbers = [];
// let input;
// do{
//   input =prompt('Введіть число:')
//   if(input !== null){
//     const number = Number(input);
//     if (!isNaN(number)) {
//       numbers.push(number);
//     }else{
//       alert('Це не число, спробуйте ще раз.')
// }
// }
// } 
// while (input !== null)
// if(numbers.length > 0){
//   let total = 0
//   for (const num of numbers){
//     total += num
//   }
//   console.log(`Загальна сума чисел дорівнює ${total}`);
// }