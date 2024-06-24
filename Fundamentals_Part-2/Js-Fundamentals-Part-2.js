'use strict';
//console.log('Hello Alok');
// function logger() {
//   console.log('Hello');
// }
// logger();
// console.log(logger());

//Challenge-1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
Your tasks:
Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
/*
let calcAverage = (score_1, score_2, score_3) =>
  (score_1 + score_2 + score_3) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
let checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas > 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(`log No team wins...`);
  }
};
checkWinner(scoreDolphins, scoreKoalas);
*/

//Challenge-2
/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
And now let's use arrays! So, create an array called bills containing the test data below.
Create an array called tips containing the tip value for each bill, calculated from the function you created before.
BONUS: Create an array totals containing the total values, so the bill + tip.
TEST DATA: 125, 555, and 44.
*/
/*
let calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
let bills = [125, 555, 44];
let tips = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}
console.log(tips);
let totals = [];
for (let i = 0; i < bills.length; i++) {
  totals[i] = bills[i] + tips[i];
}
console.log(totals);
*/

//Challenge-3
/*Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
Your tasks:
For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.
Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/
/*
let mark = {
  fullname: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    let bmi = Math.floor(this.mass / this.height ** 2);
    return bmi;
  },
};
console.log(mark.calcBMI());

let john = {
  fullname: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function (mass, height) {
    let bmi = Math.floor(this.mass / this.height ** 2);
    return bmi;
  },
};
console.log(john.calcBMI());

let higherBMI =
  mark.calcBMI() > john.calcBMI()
    ? `${mark.fullname}'s BMI (${mark.calcBMI()}) is higher than ${
        john.fullname
      }'s (${john.calcBMI()})!`
    : `${john.fullname}'s BMI (${john.calcBMI()}) is higher than ${
        mark.fullname
      }'s (${mark.calcBMI()})!`;

console.log(higherBMI);
*/

//Challenge-4
/*Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
Create an array called bills containing all 10 test bill values.
Create empty arrays for the tips and the totals (tips and totals)
Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
BONUS:
Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:
First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.
To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).
Call the function with the totals array.
*/
/*
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let calcTip = bill => (bill >= 50 && bill < 300 ? bill * 0.15 : bill * 0.2);
let average;
let tips = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}
console.log(tips);

let sum = 0;
let calcAverage = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

let billsAverage = calcAverage(bills);
console.log(billsAverage);

let totals = [];
for (let i = 0; i < bills.length; i++) {
  totals[i] = bills[i] + tips[i];
}
console.log(totals);

let totalAverage = Math.floor(calcAverage(totals));
console.log(totalAverage);
*/

//----------------------------------Assignments-----------------------------//
//Funtions
/*
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}
const country_1 = 'India';
const country_2 = 'Pakistan';
const country_3 = 'Nepal';
let population_1 = 1.4;
let population_2 = 0.25;
let population_3 = 0.1;
const capitalCity_1 = 'New Delhi';
const capitalCity_2 = 'Islamabad';
const capitalCity_3 = 'Kathmandu';
let result_1 = describeCountry('India', 1.4, 'New Delhi');
let result_2 = describeCountry(country_2, population_2, capitalCity_2);
let result_3 = describeCountry(country_3, population_3, capitalCity_3);
console.log(result_1);
console.log(result_2);
console.log(result_3);
*/

//Function Declarations vs. Expressions
/*
let worldPopulation = 7900;
function percentageOfWorld1(countryPopulation) {
  return (countryPopulation / 7900) * 100;
}
let country_1 = `India has a population ${Math.floor(
  percentageOfWorld1(1450)
)}% of world population`;
console.log(country_1);

const percentageOfWorld2 = function (countryPopulation) {
  return (countryPopulation / 7900) * 100;
};
let country_2 = `Pakistan has a population ${Math.floor(
  percentageOfWorld1(250)
)}% of world population`;
console.log(country_2);

//Arrow Functions
const percentageOfWorld3 = countryPopulation =>
  (countryPopulation / 7900) * 100;
let country_3 = `Nepal has a population ${Math.floor(
  percentageOfWorld3(100)
)}% of world population`;
console.log(country_3);

//Functions Calling Other Functions
const describeCountry = function (country, population) {
  return `${country} has ${population} million people, which is about ${Math.floor(
    percentageOfWorld1(population)
  )}% of the world`;
};
const result_1 = describeCountry('India', 1450);
console.log(result_1);
*/

//Introduction to Arrays
/*
let indiaPop = 1450;
let pakPop = 250;
let nepalPop = 100;
let bhutanPop = 50;
const population = [indiaPop, pakPop, nepalPop, bhutanPop];
if (population.length === 4) {
  console.log(true);
} else {
  console.log(false);
}
const percentageOfWorld1 = function (countryPopulation) {
  return (countryPopulation / 7900) * 100;
};
const percentages = [
  percentageOfWorld1(indiaPop),
  percentageOfWorld1(pakPop),
  percentageOfWorld1(nepalPop),
  percentageOfWorld1(bhutanPop),
];
console.log(percentages);
*/

//Basic Array Operations (Methods)
/*
const neighbours = [
  'China',
  'Pakistan',
  'Myanmar',
  'Nepal',
  'Bhutan',
  'Sri Lanka',
];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

for (let i = 0; i < neighbours.length; i++) {
  if (i != 'Germany') {
    console.log('Not a central European country');
  }
}

if (!neighbours.includes('Germany')) {
  console.log('Not a central European country');
}

neighbours[1] = 'Republic of Pakistan';
console.log(neighbours);
*/

//Introduction to Objects
/*
let myCountry = {
  country: 'India',
  language: 'Hindi',
  capital: 'New Delhi',
  population: 1450,
  neighbours: ['China', 'Pakistan', 'Myanmar', 'Nepal', 'Bhutan', 'Sri Lanka'],
};

//Dot vs. Bracket Notation
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population = 1450 + 2;
console.log(myCountry);
myCountry['population'] = myCountry.population - 2;
console.log(myCountry);
*/

//Object Methods
/*
myCountry = {
  country: 'India',
  language: 'Hindi',
  capital: 'New Delhi',
  population: 1450,
  neighbours: ['China', 'Pakistan', 'Myanmar', 'Nepal', 'Bhutan', 'Sri Lanka'],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
};
console.log(myCountry);
console.log(myCountry.describe());
myCountry.checkIsland = function () {
  return (this.island =
    this.neighbours.length >= 1 ? (this.island = false) : (this.island = true));
};
console.log(myCountry.checkIsland());
console.log(myCountry);
*/

//Iteration: The for Loop
/*
const voters = 50;
for (let i = 1; i <= voters; i++) {
  console.log(`Voter-${i} is currently voting`);
}
*/

//Looping Arrays, Breaking and Continuing
/*
let indiaPop = 1450;
let pakPop = 250;
let nepalPop = 100;
let bhutanPop = 50;
const population = [indiaPop, pakPop, nepalPop, bhutanPop];
let percentages2 = [];

const percentageOfWorld1 = function (countryPopulation) {
  return (countryPopulation / 7900) * 100;
};
for (let i = 0; i < population.length; i++) {
  percentages2.push(Math.floor(percentageOfWorld1(population[i])));
}
console.log(percentages2);
*/

//Looping Backwards and Loops in Loops
/*
let listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}
*/

//The while Loop
