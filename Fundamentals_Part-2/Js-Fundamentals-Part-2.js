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

//----------------------------------Assignments-----------------------------//
//Funtions
const describeCountry = (country, population, capitalCity) => `${country} has ${population} million people and its capital city is ${capitalCity}`;
console.log(describeCountry('India',1500,'New Delhi'));
//Function Declarations vs. Expressions
let worldPopulation = 7900;
function percentageOfworld1(population){
  return Number(((population/worldPopulation)*100).toFixed(2));
}
console.log(percentageOfworld1(1500));

const percentageOfworld2 = function(population){
  return Number(((population/worldPopulation)*100).toFixed(2));
}
console.log(percentageOfworld2(1600));
//Arrow Functions
const percentageOfworld3 = (population) => Number(((population/worldPopulation)*100).toFixed(2));
//Functions Calling Other Functions
const describePopulation = (country, population) => console.log(`${country} has ${population} million people, which is ${percentageOfworld3(population)}% of the world`);
describePopulation('India',1500);
describePopulation('Pakistan',250);
//Introduction to Arrays
let indiaPopulation = 1500;
let pakistanPopulation = 250;
let bhutanPopulation = 25;
let nepalPopulation = 75;
let population = [indiaPopulation, pakistanPopulation, bhutanPopulation, nepalPopulation];
console.log(population.length === 4);
const percentages = [percentageOfworld3(indiaPopulation), percentageOfworld3(pakistanPopulation), percentageOfworld3(bhutanPopulation), percentageOfworld3(nepalPopulation)];
console.log(percentages);
//Basic Array Operations (Methods)
const neighbours = ['Pakistan', 'Bhutan', 'Nepal', 'Bangladesh'];
neighbours.push('Utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if(!neighbours.includes('Germany')){
console.log(`Probably not a central european country :D`);
}
const index = neighbours.indexOf('Pakistan');
neighbours[index] = 'Israel';
console.log(neighbours);
//Introduction to Objects
const myCountry = {
  country:'India',
  capital:'New Delhi',
  language:['Hindi','English'],
  population:1500,
  neighbours,
}
// Dot Vs Bracket
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language[0]} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population+= 2;
console.log(myCountry);

myCountry['population']+=2;
console.log(myCountry);
//Object Methods
myCountry.describe = function(){
  return console.log(`${this.country} has ${this.population} million ${this.language[0]} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
}
myCountry.describe();

myCountry.checkIsLand = function(){
  return this.isLand = neighbours.length >= 1 ? true: false;
}
myCountry.checkIsLand();
console.log(myCountry);
//Iteration: The for Loop
for(let i=1; i<=50; i++){
  console.log(`Voter number ${i} is currently voting`);
}
//Looping Arrays, Breaking and Continuing
const percentages2 = [];
for(let i=0; i<population.length; i++){
  percentages2.push(percentageOfworld3(population[i]));
}
console.log(percentages2);
//Looping Backwards and Loops in Loops
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for(let i=0; i<listOfNeighbours.length; i++){
  for(let j=0; j<listOfNeighbours[i].length; j++){
    console.log(`Neighbour:${listOfNeighbours[i][j]}`);
  }
}
//The while Loop
const percentages3 = [];
let i = 0;
while(i<population.length){
percentages3.push(percentageOfworld3(population[i]));
i++;
}
console.log(percentages3);