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

const book = getBook(1);
// const title = book.title;
// title;

const { title, author, genres, publicationDate, pages } = book;
console.log(title, author, genres, publicationDate);

// console.log(primaryGenre, secondaryGenre);

// rest and spread operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};
console.log(updatedBook);

// template literals `${}`

const summary = `${title}, a ${pages}--page long book, was written by ${author}`;
summary;

let test = pages > 1000 ? "over a thousand" : "less than one thousand";
console.log(test);

// everybody loves arrow functions () => {} quick and dirty

let todaysDate = "11-02-2023";

// function getYear(str) {
//   return str.split("-")[2];
// }

let dateFunc = (str) => str.split("-")[2];
console.log(dateFunc(todaysDate));
