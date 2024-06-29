'use strict';
//-------------------DESTRUCTURING ARRAY
//1.1
/*
const book = ['Book-1', 'Book-2', 'Book-3'];
const [firstBook, secondBook] = book;
console.log(firstBook, secondBook);
*/
//1.2
/*
const [, , thirdBook] = book;
console.log(thirdBook);
*/
//1.3
/*Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
 */
/*
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingCount]] = ratings;
console.log(rating, ratingCount);
*/
//1.4
/*
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(threeStarRatings);
*/

//----------------------DESTRUCTURING OBJECTS
//2.1
/*
const firstBook = {
  books: [
    'book1',
    'book2',
    'book3',
    'book4',
    'book5',
    'book6',
    { language: 'English' },
  ],
};
const {
  books: [title, author, ISBN],
} = firstBook;
console.log(title, author, ISBN);

//2.2 (Did't understand the question)

//2.3
const { language, programmingLanguage = 'unknown' } = firstBook.books[6];
console.log(language, programmingLanguage);

//2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = firstBook.books);
console.log(title, author);
*/

// Spread Operator
//3.1
/*
const books = [{ author: ['Alok', 'Ankit'] }, { author: ['Sobha'] }];
const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

//3.2
const spellWord = function (str) {
  return console.log(...str);
};
console.log(spellWord('JavaScript')); //Undefined
const str1 = 'Alok';
const strArr2 = console.log(...str1); // A l o k
console.log(strArr2); //Undefined: As console.log returns undefined.
const strArr3 = [...str1];
console.log(strArr3);
*/

// Rest Patterns & Parameters
