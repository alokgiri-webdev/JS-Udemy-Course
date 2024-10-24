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

const dolphinsScores_1 = [44, 23, 71];
const koalasScores_1 = [65, 54, 49];
const dolphinsScores_2 = [85, 54, 41];
const koalasScores_2 = [23, 34, 27];

const avgDolphins_1 = dolphinsScores_1.reduce(
  (acc, mov, _, arr) => Math.floor(acc + mov / arr.length),
  0
);
const avgDolphins_2 = dolphinsScores_2.reduce(
  (acc, mov, _, arr) => Math.floor(acc + mov / arr.length),
  0
);
console.log(avgDolphins_1, avgDolphins_2);
const avgKoalas_1 = koalasScores_1.reduce(
  (acc, mov, _, arr) => Math.floor(acc + mov / arr.length),
  0
);
const avgKoalas_2 = koalasScores_2.reduce(
  (acc, mov, _, arr) => Math.floor(acc + mov / arr.length),
  0
);
console.log(avgKoalas_1, avgKoalas_2);

if (avgDolphins_1 > 2 * avgKoalas_1) {
  console.log(`Dolphins win ${avgDolphins_1} Vs. ${avgKoalas_1}`);
} else if (avgKoalas_1 > 2 * avgDolphins_1) {
  console.log(`Koalas win ${avgKoalas_1} Vs. ${avgDolphins_1}`);
} else {
  console.log(`Nobody wins`);
}

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
const bills = [125, 555, 44];
const calcTip = bill => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};
const tips = bills.map(bill => calcTip(bill));
console.log(tips);

//Challenge-3 (Solve using OOPs)
/*Let's go back to Mark and John comparing their BMIs!
This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
Your tasks:
For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.
Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.
Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI() {
    this.bmiMark = Math.floor(this.mass / this.height ** 2);
    return this.bmiMark;
  },
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI() {
    this.bmiJohn = Math.floor(this.mass / this.height ** 2);
    return this.bmiJohn;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark, john);

if (john.bmiJohn > mark.bmiMark) {
  console.log(
    `John Smith's BMI (${john.bmiJohn}) is higher than Mark Miller's (${mark.bmiMark})!`
  );
} else {
  console.log(
    `Mark Miller's BMI (${mark.bmiMark}) is higher than Mark Miller's (${john.bmiJohn})!`
  );
}
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
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = bills2.map(bill => calcTip(bill));
console.log(tips2);
const totals = bills2.map(bill => calcTip(bill) + bill);
console.log(totals);
const avgTotals = totals.reduce(
  (acc, total, _, arr) => acc + total / arr.length,
  0
);
console.log(avgTotals);
//----------------------------------Assignments-----------------------------//
//Funtions

//Function Declarations vs. Expressions

//Arrow Functions

//Functions Calling Other Functions

//Introduction to Arrays

//Basic Array Operations (Methods)

//Introduction to Objects

// Dot Vs Bracket

//Object Methods

//Iteration: The for Loop

//Looping Arrays, Breaking and Continuing

//Looping Backwards and Loops in Loops

//The while Loop
