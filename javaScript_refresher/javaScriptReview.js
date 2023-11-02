const data = [
  {
    id: 1,
    title: "The lord of the Rings",
    puglicationDate: "1954-07-29",
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
    title: "The lord of the Rings",
    puglicationDate: "1954-07-29",
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
    puglicationDate: "1954-07-29",
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

const books = getBooks();
