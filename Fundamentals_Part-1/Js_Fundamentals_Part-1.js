'use strict';
// console.log('Hello World');
// const calcAge = birthYear => 2037 - birthYear;
// console.log(calcAge(1992));
// console.log('Hello Alok');
//--------------------------------------------------------FUNDAMENTALS-1----------------------------------------------------------------//
//Windows + . for emojis

//Challenge-1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
Your task is to write some code to help them:
Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
Log the value of BMIMark and BMIJohn to the console.
BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too.
TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
👋 OPTIONAL: You can watch my solution in video format in the next lecture
IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

//Challenge-2
/*Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
2. Modify the outputs above to use template literals to include the BMI values in the outputs.
Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
Note: Don't round the BMI values. Leave them as they are.
👋 OPTIONAL: You can watch my solution in video format in the next lecture
IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/
markHigherBMI_1
  ? console.log(`Mark's BMI(${bmiMark_1}) is higher than John's(${bmiJohn_1})!`)
  : console.log(
      `John's BMI(${bmiJohn_1}) is higher than Mark's(${bmiMark_1})!`
    );

//Challenge-3
/*There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
2. Compare the team's average scores to determine the winner of the competition, and print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.
TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];
const avgDolphins = dolphinsScores.reduce(
  (acc, mov, _, arr) => Math.floor(acc + mov / arr.length),
  0
);
console.log(avgDolphins);
const avgKoalas = koalasScores.reduce(
  (acc, mov, _, arr) => Math.floor(acc + mov / arr.length),
  0
);
console.log(avgKoalas);
if (avgDolphins > avgKoalas) {
  console.log('Dolphins win the trophy');
} else if (avgDolphins < avgKoalas) {
  console.log('Koalas win the trophy');
} else {
  console.log(`Both win the trophy`);
}
//Challenge-4
/*Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).
Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: The bill was 275, the tip was 41.25, and the total value 316.25.
Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
TEST DATA: Test with different bill values: 275, 40, and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/
const tipCalculator = bill => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return `The bill was ${bill}, the tip was ${tip}, and the total value ${
    bill + tip
  }`;
};
console.log(tipCalculator(100));

//---------------------Assignments-------------------------------//
//VALUES & VARIABLES
//Data Types
//let, const & var
//Basic Operators
//Strings & Template Literals
//same
//Taking Decisions: if / else Statements
//Type Conversion and Coercion
//Equality Operators: == vs. ===
//Logical Operators
//The switch Statement
//The Conditional (Ternary) Operator
