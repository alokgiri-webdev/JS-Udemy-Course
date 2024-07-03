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

//2.4 (Did't understand)
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = firstBook.books);
console.log(bookTitle, bookAuthor);
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
//4.1
/*
const firstBook = ['book1', 'book2', 'book3', 'book4'];
const [mainKeyword, ...rest] = firstBook;
console.log(mainKeyword, rest);

//4.2
const books = [
  'book1',
  { publisher: 'Penguine', bookName: 'Autobigraphy', bookLaunch: 'Delhi' },
  'book3',
];
const { publisher: bookPublisher, ...restofTheBook } = books[1];
console.log(bookPublisher, restofTheBook);

//4.3
const printBookAuthorsCount = function (title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
};
printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
*/

//------------Short Circuiting
//5.1
/*
const book = {
  title: 'Algorithms-1',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  programmingLanguage: 'Java',
};
const hasExamplesInJava = function (book) {
  return book.programmingLanguage === 'Java' || 'no data available';
};

console.log(hasExamplesInJava(book));
*/

/*
const books = [
  {
    title: 'Algorithms-1',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    programmingLanguage: 'Java',
  },
  {
    title: 'Algorithms-2',
    author: ['Robert', 'Kevin'],
    programmingLanguage: 'JavaScript',
  },
  {
    title: 'Algorithms-3',
    author: ['Sedgewick', 'Wayne'],
  },
];

const hasExamplesInJava2 = function (arr) {
  return arr.programmingLanguage === 'Java' || 'No data available';
};

console.log(hasExamplesInJava2(books[0]));
console.log(hasExamplesInJava2(books[1]));
console.log(hasExamplesInJava2(books[2]));
*/

//5.2
/*
const book = [
  {
    title: 'Operating System Concepts',
    onlineContent: true,
  },
];
for (const i of book) {
  i.onlineContent && console.log(`${i.title} provides online content`);
}
*/

//--------------The Nullish Coalescing Operator (??)
//6.1
/*
const books = [
  {
    title: 'Algorithms-1',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    programmingLanguage: 'Java',
    onlineContent: 0,
  },
  {
    title: 'Algorithms-2',
    author: ['Robert', 'Kevin'],
    programmingLanguage: 'JavaScript',
  },
  {
    title: 'Algorithms-3',
    author: ['Sedgewick', 'Wayne'],
  },
];

for (const i of books) {
  i.onlineContent ?? //For value 0 & '' ?? results in the same data when condition is
    console.log(`${i.title} provides no data about its online content.`);
}
*/

//-----------------Logical Assignments Operators
//7.1
/*
const books = [
  {
    title: 'Algorithms-1',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    programmingLanguage: 'Java',
    onlineContent: 0,
    edition: 5,
    highlighted: true,
    thirdparty: {
      goodreads: {
        ratings: 3,
      },
    },
  },
  {
    title: 'Algorithms-2',
    author: ['Robert', 'Kevin'],
    programmingLanguage: 'JavaScript',
    highlighted: true,
    thirdparty: {
      goodreads: {
        ratings: 3,
      },
    },
  },
  {
    title: 'Algorithms-3',
    author: ['Sedgewick', 'Wayne'],
    highlighted: true,
    thirdparty: {
      goodreads: {
        ratings: 6,
      },
    },
  },
];

for (const i of books) {
  i.edition ||= 1;
}
console.log(books);

for (const i of books) {
  i.highlighted = i.highlighted && !(i.thirdparty.goodreads.ratings < 4.2);
}
*/

//------------------Looping Arrays: The for-of Loop
//8.1
/*
const books = [
  {
    title: 'Algorithms-1',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    programmingLanguage: 'Java',
    onlineContent: 0,
    pages: 50,
  },
  {
    title: 'Algorithms-2',
    author: ['Robert', 'Kevin'],
    programmingLanguage: 'JavaScript',
    pages: 200,
  },
  {
    title: 'Algorithms-3',
    author: 'Alok',
    pages: 300,
  },
];

let pageSum = 0;
for (const i of books) {
  pageSum += i.pages;
}

console.log(pageSum);

//8.2
const allAuthors = [];
for (const i of books) {
  if (typeof i.author === 'string') {
    allAuthors.push(i.author);
  } else {
    allAuthors.push(...i.author);
  }
}
console.log(allAuthors);

//8.3
for (const [i, author] of allAuthors.entries()) {
  console.log(`${i + 1}. ${author}`);
}
*/

//--------------------Enhanced Object Literals
const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  // ...
};

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};
console.log(newBook2);
