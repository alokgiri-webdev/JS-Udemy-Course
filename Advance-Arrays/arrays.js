'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

//Solution:

const juliaData1Original = [3, 5, 2, 12, 7];
const juliaData2Original = [9, 16, 6, 8, 3];
const juliaData1Final = juliaData1Original.slice().slice(1,-2);
const juliaData2Final = juliaData2Original.slice().slice(1,-2);
const kate1 = [4, 1, 15, 8, 3];
const kate2 = [10, 5, 6, 1, 4];
const juliaKate1 = [...juliaData1Final,...kate1];
const juliaKate2 = [...juliaData2Final,...kate2];
//juliaKate1.forEach((dogAge,i)=>{dogAge > 3 ? console.log(`Dog number ${i+1} is adult`): console.log(`Dog number ${i+1} is Puppy 🐶`);
//});


function CheckDogs(dogsJulia,dogsKate){
 const correctedJulia = dogsJulia.slice(1,-2);
 console.log(correctedJulia);
 const dogsJulia_dogsKate = [...correctedJulia, ...dogsKate];
 dogsJulia_dogsKate.forEach((dogsAge,i)=> dogsAge>3 ? console.log(`Dog number ${i+1} is ${dogsAge} adult`): console.log(`Dog number ${i+1} is ${dogsAge} Puppy 🐶`));
}
CheckDogs(juliaData1Original,kate1);

// Coding Challenge #2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


// Coding Challenge #3
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// Coding Challenge #4

/*
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
//2 (Solve by using find method)


//3 (Use filter & FlatMap) & 4(Use join)

//5 (use some)


//6

//7 Use filter

//8 Note how to create shallow copy

//Revision
//SLICE
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
//console.log(arr.slice(1, -2)); //['b', 'c', 'd']

//SPLICE
//console.log(arr.splice(2)); //['c', 'd', 'e', 'f']
//console.log(arr); //['a', 'b']
//console.log(arr.splice(1, -2)); //Invalid

//REVERSE
//console.log(arr.reverse()); //['f', 'e', 'd', 'c', 'b', 'a']
//console.log(arr); //['f', 'e', 'd', 'c', 'b', 'a']

//CONCAT
//console.log(arr.concat(arr2)); //['a', 'b', 'c', 'd', 'e', 'f', 'j', 'i', 'h', 'g', 'f']

//AT
//console.log(arr.at(-1)); //f
//console.log('Alok'.at(0)); //A

// forEach With Maps and Sets
/*
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/

//Ways to creat new Array
/*
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //[1, 2, 3, 4, 5, 6, 7]
console.log(new Array(7)); //[empty × 7]
console.log(new Array(7).fill(1)); //[1, 1, 1, 1, 1, 1, 1]
console.log(new Array(7).fill(1, 3)); //[empty × 3, 1, 1, 1, 1]
console.log(new Array(7).fill(1, 3, 6)); //[empty × 3, 1, 1, 1, empty]

//Array.from (Way to create new Array)
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]
const z = Array.from({ length: 7 }, (curr, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]

//Converting & Checking Numbers
console.log(23 === 23.0); // true

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2); // 0.30000000004 By default there is JavaScript issue.
console.log(0.1 + 0.2 === 0.3); // false

// Conversion (Ways to convert to nos.)
console.log(Number('23')); 
console.log(+'23');

// Parsing (It takes out the first digits)
console.log(Number.parseInt('30px', 10)); // 30  (10 is the no. base system)
console.log(Number.parseInt('e23', 10)); // NaN

console.log(Number.parseInt('  2.5rem  ')); // 2
console.log(Number.parseFloat('  2.5rem  ')); // 2.5

// console.log(parseFloat('  2.5rem  ')); // 2.5 but this is an old school way of doing prefer the earlier one

// Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false **
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false (Infinity is not an NaN)

// Checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite('20')); //false **
console.log(Number.isFinite(+'20X')); //false
console.log(Number.isFinite(23 / 0)); //false

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); // true **
console.log(Number.isInteger(23 / 0)); // false

//Math & Rounding
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); finding sqare root
console.log(8 ** (1 / 3)); finding cube

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN
console.log(Math.min(5, 18, 23, 11, 2)); // 2

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));

// Rounding integers
console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor('23.9')); //23

console.log(Math.trunc(23.3)); //23

console.log(Math.trunc(-23.3)); //-23 
console.log(Math.floor(-23.3)); //-24  Therefore, using floor is better than trunc

// Rounding decimals
console.log((2.7).toFixed(0)); //'3'
console.log((2.7).toFixed(3)); //'2.700'
console.log((2.345).toFixed(2)); //'2.35'
console.log(+(2.345).toFixed(2)); //2.35

//Remainder Operator & Numeric Separator
console.log(5 % 2); // 1
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); // NaN
console.log(Number.parseInt('230_000')); //230

//SetTimeOut & SetInterval
// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);

// Creating & Filling Array by dynamically generating random nos. 
const random = Array.from({ length: 100 }, () => Math.ceil(Math.random() * 10));
console.log(random);
*/

//Find the second largest No. // Try using set too
/*
const input = [11, 2, -2, 11, 7, 7];
const output = 7;

input.sort((a, b) => b - a);
console.log(input);

let first = input[0];
let second;
for (let i = 0; i < input.length; i++) {
  if (input[i] != first) {
    second = input[i];
    break;
  }
}
console.log(second);
*/

//Rotate the array to 2 places left
/*
const input = [2, 7, 11, 4, -2];
const output = [];

for (let i = 0; i < input.length; i++) {
  output.push(input[(i + 2) % input.length]); //Explanation:(i + 2) % input.length: This ensures that when i + 2 exceeds the array length, it wraps around to the beginning of the array.
}
console.log(output);
*/

//Reverse the string word by word
/*
const str = 'This is JavaScript code';
//Output: 'sihT si tpircSavaJ edoc'
const reversedStr = str => {
  const reversedArr = str
    .trim()
    .split(' ')
    .map(str => str.split('').reverse().join(''))
    .join(' ');
  return reversedArr;
};
console.log(reversedStr(str));
*/

//Find a max char in a string sentence
/*
const str = 'This is a JavaScript code and you need to find the max char';
const maxChar = str => {
  const strArr = str.split(' ').join('').split('');
  console.log(strArr);
  const charObj = {};
  for (const char of strArr) {
    charObj[char] ? charObj[char]++ : (charObj[char] = 1);
  }
  console.log(charObj);
  let letter = '';
  let maxCount = 0;
  for (const [key, value] of Object.entries(charObj)) {
    if (value > maxCount) {
      maxCount = value;
      letter = key;
    }
  }
  return letter;
};

console.log(maxChar(str));
*/
