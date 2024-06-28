'use strict';
//-------------------DESTRUCTURING ARRAY
//1.1
const book = ['Book-1', 'Book-2', 'Book-3'];
const [firstBook, secondBook] = book;
console.log(firstBook, secondBook);

//1.2
const [, , thirdBook] = book;
console.log(thirdBook);

//1.3
/*Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
 */
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating], [, ratingCount]] = ratings;
console.log(rating, ratingCount);

//1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
console.log(threeStarRatings);

//----------------------DESTRUCTURING OBJECT
