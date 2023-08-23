const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'react-bookstore/books/REMOVE_BOOK';

const initialState = {
  books: [
    { id: 1, title: 'Harry Potter', author: 'JK. Rowlings' },
    { id: 2, title: 'Bad Boys', author: 'Will Smith' },
    { id: 3, title: 'Rush Hour', author: 'Jackie Chan' },
  ],
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: state.books.concat(action.book),
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.id),
      };
    default: return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
