'use strict';
//-------------------DESTRUCTURING ARRAY
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//---------------------DESTRUCTURING ARRAYS
//1.1
const [firstBook, secondBook] = books;
console.log(firstBook);
console.log(secondBook);
//1.2
const [, ,thirdBook] = books;
console.log(thirdBook);
//1.3
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[,rating], [,ratingsCount]] = ratings;
console.log(rating, ratingsCount);
//1.4
const ratingStars = [63405, 1808];
const [one, two, three=0] = ratingStars;
console.log(one, two, three);
//----------------------DESTRUCTURING OBJECTS
//2.1
const {title,author,ISBN} = books.at(0);
console.log(title, author, ISBN);
//2.2
const {keywords:tags} = books.at(0);
console.log(tags);
//2.3
const {language,programmingLanguage='unknown'} = books.at(6);
console.log(language,programmingLanguage);
//2.4 (Always check its solution)
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({title: bookTitle, author: bookAuthor} = books[0]);
console.log(bookTitle, bookAuthor);
//2.5 (You get stuck here: Always remember how nested object is reached)
const {thirdParty:{goodreads:{rating:bookRating}}} = books.at(0);
console.log(bookRating);
//2.6 be careful.
const printBookInfo = function({title,author,year='year unknown'}){
  console.log(`${title} by ${author}, ${year}`);
};
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
// Spread Operator
//3.1 (Be careful)
const bookAuthors = [...books.at(0).author,...books.at(1).author];
console.log(bookAuthors);
//3.2
const spellWord = function(string){
  return console.log(...string);
};
spellWord('Javascript');
// Rest Patterns & Parameters
//4.1 (Be careful)
const [mainKeyword, ...rest] = books.at(0).keywords;
console.log(mainKeyword, rest);
//4.2 (Be mindful in next time solving)
const{publisher:bookPublisher,...restOfTheBook} = books.at(1)
console.log(bookPublisher, restOfTheBook);
//4.3
const printBookAuthorsCount = function(title, ...authors){
console.log(`The book ${title} has ${authors.length} authors`);
}
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
//------------Short Circuiting
//5.1
const hasExamplesInJava = function({programmingLanguage}){
  return programmingLanguage === 'Java' || 'No data available';
}
console.log(hasExamplesInJava(books[0]));
//5.2
for(let i=0; i<books.length; i++){
books.at(i).onlineContent === true && console.log(`${books.at(i).title} provides online content`); 
}
//--------------The Nullish Coalescing Operator (??)
//6.1
for(let i=0; i<books.length; i++){
books.at(i).onlineContent ?? console.log(`${books.at(i).title}" provides no data about its online content`);
}
//-----------------Logical Assignments Operators
//7.1
for(let i=0; i<books.length; i++){
  books.at(i).edition||=1;
}
//7.2 Look into this again later (check with books.at(3))
for(let i=0; i<books.length; i++){
  books.at(i).highlighted &&= !(books.at(i).thirdParty.goodreads.rating < 4.2);
}
//------------------Looping Arrays: The for-of Loop
//8.1 use reduce
let pageSum = 0;
for(const book of books){
pageSum += book.pages
}
console.log(pageSum);
//8.2 use flatMap
const allAuthors = [];
for(const book of books){
  if(typeof book.author === 'string'){
allAuthors.push(book.author);
  }else{
    for(const author of book.author){
allAuthors.push(author);
    }
  }
}
console.log(allAuthors);
//8.3
for(const [index,author] of allAuthors.entries()){
console.log(`${index+1}. ${author}`);
}
//--------------------Enhanced Object Literals
//9.1 (Convert Map to Object using Object.fromEntries(map) & also write logic for fromEntries)

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];
const bookDataObject = Object.fromEntries(bookData);
console.log(bookDataObject);

//9.2
const pages = 880;
const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};
console.log(newBook2);

//---------------Optional Chaining (?.) Check using getFirstKeyword(books.at(8))
//10.1 (6 times wasn't able to solve)
/*Write a function called getFirstKeyword that takes the book object as an argument. This function should return the first keyword from the book's keywords property (array) or undefined (if the keywords property doesn't exist). It shouldn't throw an error. Use optional chaining for that.
*/
const getFirstKeyword = function({keywords}){
return console.log(keywords?.at(0));
}
getFirstKeyword(books.at(0));
//-------------------Looping Objects: Object Keys, Values and Entries
//11.1 This too
/*
Below is the entries variable that stores an empty array. Use the for-of loop together with the Object.keys() method to loop over the thirdParty.goodreads property (array) of the first book object from the books array. For each key, push a new array that contains that key to the entries array.

In the end, the entries array should be filled with arrays containing keys:
[['rating'], ['ratingsCount'], ['reviewsCount'], ['fiveStartRatingCount'], ['oneStartRatingCount']]
*/

//11.2 Wasn't able to solve last time
/*Use the for-of loop together with the Object.values() method and Array's entries() method to loop over thirdParty.goodreads property of the first book from the books array.
Push each value to the appropriate inner array in the entries array (use index from entries()).
*/

//11.3

//11.4

//------------------Sets
//12.1

//12.2

//12.3

//12.4

//12.5 converting Set to Array

//12.6

//------------Maps Fundamentals
//13.1
/*
[
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
];
*/
//13.2 got stuck here priviously. Don't put array inside (use .set() to set new pair)

//13.3 got stuck here. Use .get()

//13.4 Remeber there's no () for calling size

//13.5

//----------MAP ITERATION
//14.1 (Convert Object to Map)

//14.2

//------------Strings Part-1
//15.1

//15.2

//15.3

//15.4

//-------------Strings Part-2
//16.1

//16.2

//16.3

//-------------Strings Part-3
//17.1
/*
const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
console.log(logBookCategories(bookCategories));
*/

//17.2 check again (solve in a single line)
//getKeywordsAsString(books);

//17.3
/*
const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

logBookChapters(bookChapters);
*/

//---------------------------CHALLENGES-----------------------------------------------------
//Challenege-1
/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game. In this challenge we're gonna work with that data.
Your tasks:
1.  Create one player array for each team (variables 'players1' and 
'players2')
2.  The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3.  Create an array 'allPlayers' containing all players of both teams (22 players)
4.  During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5.  Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6.  Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7.  The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hammels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Solution:
//Task-1
const [player1, player2] = game.players;
console.log(player1, player2);
//Task-2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);
//Task-3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
//Task-4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
//Task-5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
//Task-6
const printGoals = (...players) => {
  console.log(players + ' ' + players.length);
};
printGoals('Thiago', 'Coutinho', 'Perisic');
//Task-7
game.odds.team1 < game.odds.team2 &&
  console.log(`${game['team1']} is more likely to win`);

//Challenge-2
/*
Let's continue with our football betting app! Keep using the 'game' variable from before.
Your tasks:
1.  Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2.  Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3.  Print the 3 odds to the console, but in a nice formatted way, exactly like this: Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). Hint: Note how the odds and the game objects have the same property names �
4.  Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1, Hummels: 1, Lewandowski: 2
}
*/

//Task-1
game.scored.forEach((player, i) => console.log(`Goal ${i + 1}: ${player}`));
//Task-2 Note: How to find the length of the Object : Object.keys(Obj).length
const avgOdd = Object.values(game.odds).reduce(
  (acc, odd, _, arr) => Math.floor(acc + odd / arr.length),
  0
);
console.log(avgOdd);
//Task-3 Note: got stuck last time
for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${key === 'x' ? 'draw' : `victory ${game[key]}`}: ${value}`
  );
}
//Task-4 (Bonus) check again
const scorers = {};
for (const key of game.scored) {
  scorers[key] ? scorers[key]++ : (scorers[key] = 1);
}
console.log(scorers);

//Challenege-3
/*
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1.  Create an array 'events' of the different game events that happened (no duplicates)
2.  After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3.  Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4.  Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17:⚽GOAL
*/

const gameEvents = new Map([
  [17, '⚽  GOAL'],
  [36, '�  Substitution'],
  [47, '⚽  GOAL'],
  [61, '�  Substitution'],
  [64, '�  Yellow card'],
  [69, '�  Red card'],
  [70, '�  Substitution'],
  [72, '�  Substitution'],
  [76, '⚽  GOAL'],
  [80, '⚽  GOAL'],
  [92, '�  Yellow card'],
]);

//Task-1
const events = [...new Set(gameEvents.values())];
console.log(events);
//Task-2
gameEvents.delete(64);
console.log(gameEvents);
//Task-3
const lastEevntMin = [...gameEvents.keys()].pop();
console.log(lastEevntMin);
const gameEventsLength = [...gameEvents.keys()].length;
console.log(gameEventsLength);
console.log(
  `An event happened every ${Math.floor(lastEevntMin / gameEventsLength)} mins`
);
//Task-4
gameEvents.forEach((value, key) =>
  console.log(
    `${key <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}: ${value}`
  )
);
//Challenege-4
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs): 
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
Hints:
§    Remember which character defines a new line in the textarea �
§    The solution only needs to work for a variable made out of 2 words, like a_b
§    Start without worrying about the ✅. Tackle that only after you have the variable name conversion working �
§    This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
*/
const formalName = [
  'underscore_case',
  'first_name',
  'Some_Variable',
  'calculate_AGE',
  'delayed_departure',
];

formalName.forEach((str, i) => {
  const [first, second] = str.split('_');
  const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;
  console.log(output.padEnd(20, ' ') + '✅'.repeat(i + 1));
});

//Challenge 5 Bonus
// String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/*Desired Output is below*/
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

/*Solution is below*/
const flight = flights.split('+');
console.log(flight);

const extractStr = str => {
  return str.slice(0, 3).toUpperCase();
};

flight.forEach(str => {
  const [type, from, to, time] = str.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${extractStr(from)} to ${extractStr(to)} (${time.replace(':', 'h')})`;
  console.log(output.padStart(50));
});

//Bonus
// Write a name shortner function which takes long names from API short it to 10 characters and then ...

//Coding Challenge Question 1
const input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
const input2 = { a: 2, e: 12, f: 6, d: 10 };
//const output = { d: 10, e: 12 };
