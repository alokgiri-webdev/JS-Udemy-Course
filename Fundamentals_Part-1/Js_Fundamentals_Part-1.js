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


//---------------------Assignments-------------------------------//
//VALUES & VARIABLES
const country = "India";
const continent = "Asia";
let population = 1500;
console.log(country, continent, population);
//Data Types
const isLand = false;
let language;
console.log(typeof isLand);
//let, const & var
language = "Assamese";
console.log(language);
//Basic Operators
let halfPopulation = population/2;
console.log(halfPopulation);
halfPopulation++;
console.log(halfPopulation);
let finlandPopulation = 6;
let ifIndiaPopulationMore = population > finlandPopulation;
console.log(ifIndiaPopulationMore);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
//Strings & Template Literals
//same
//Taking Decisions: if / else Statements
if(population>33){
  console.log(`${country}'s population is ${Math.abs(33-population)} million below average`);
}
//Type Conversion and Coercion
console.log('9' - '5'); // 4?
console.log('19' - '13' + '17'); // 617?
console.log('19' - '13' + 17); // 23?
console.log('123' < 57); // false ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // 1143?
//Equality Operators: == vs. ===
/*
const numNeighbour = Number(prompt(`How many neighbour countries does your contry have?`));
if(numNeighbour === 1){
  console.log('Only 1 border');
}else if(numNeighbour>1){
  console.log('More than 1 border');
}else{
  console.log('No border');
};
*/
//Logical Operators
if(language === 'English' && population<50 && isLand){
  console.log(`${country} is an ideal country to stay`);
}else{
  console.log(`${country} is not an ideal country to stay`);
}
//The switch Statement
switch (language) {
  case ("chinese" || "mandarin"):
    console.log('MOST number of native speakers!');
    break;

  case ('spanish'):
    console.log('2nd place in number of native speakers');
    break;

  case ('english'):
    console.log('3rd place in number of native speakers');
    break;

  default:
    console.log('Great language too');
}

//The Conditional (Ternary) Operator
console.log(`${country}'s population is ${population>33 ? 'above':'below'} average`);