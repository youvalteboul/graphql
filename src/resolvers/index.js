const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const authors = [
  {
    name: 'J.K. Rowling',
  },
  {
    name: 'Michael Crichton',
  },
];

export default {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};
