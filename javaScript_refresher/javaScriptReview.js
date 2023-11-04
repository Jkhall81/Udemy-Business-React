const data = [
  {
    id: 1,
    title: "The lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El senor de los anillos",
      chinese: "text",
      frenche: "Le Seigneur des anneuaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
      },
    },
  },
  {
    id: 2,
    title: "Junkie Roomate",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El senor de los anillos",
      chinese: "text",
      frenche: "Le Seigneur des anneuaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
      },
    },
  },
  {
    id: 3,
    title: "The lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El senor de los anillos",
      chinese: "text",
      frenche: "Le Seigneur des anneuaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// destructuring

// const book = getBook(1);
// const title = book.title;
// title;

// const { title, author, genres, publicationDate, pages } = book;
// console.log(title, author, genres, publicationDate);

// console.log(primaryGenre, secondaryGenre);

// rest and spread operator
// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [...genres, "epic fantasy"];
// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19",
//   pages: 1210,
// };
// console.log(updatedBook);

// template literals `${}`

// const summary = `${title}, a ${pages}--page long book, was written by ${author}`;
// summary;

// let test = pages > 1000 ? "over a thousand" : "less than one thousand";
// console.log(test);

// everybody loves arrow functions () => {} quick and dirty

// let todaysDate = "11-02-2023";

// function getYear(str) {
//   return str.split("-")[2];
// }

// let dateFunc = (str) => str.split("-")[2];
// console.log(dateFunc(todaysDate));

// short circuiting

/* if true returns whatever is after operand, if false, returns first */
// console.log(true && "Some string");
// console.log(false && "Some string");

// console.log(pages < 1000 && "This is a long book");
// console.log(pages > 1000 && "This is a long book");

// console.log(true || "Some string");
// console.log(false || "Some string");

// optional chaining

/*
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

// let result = getTotalReviewCount(book);
// console.log(result);

// functional array methods.

const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);

console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

// filter

const longBooks = books.filter((book) => book.pages > 500);
longBooks;

const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure")
);
adventureBooks;
const adventureTitles = adventureBooks.map((book) => book.title);
adventureTitles;

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// sort

const y = [3, 7, 1, 9, 2, 1];

const sorted = y.slice().sort((a, b) => a - b);
sorted;
y;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages)
sortedByPages;

// add new book object to array

const newBook = {
    id: 6,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook]
const booksAfterAddTitles = booksAfterAdd.map((book) => book.title)
booksAfterAddTitles;
*/

// async await, data fetching

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then((res) => res.json())
// .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos(); // KaBoom
