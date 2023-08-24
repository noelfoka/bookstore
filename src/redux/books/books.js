import ConnectBook from '../connectApi/connect';

const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'react-bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'react-bookstore/books/GET_BOOKS';

const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  let books;
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
    case GET_BOOKS:
      books = Object.keys(action.payload).map((id) => ({
        id,
        title: action.payload[id][0].title,
        author: action.payload[id][0].author,
        category: action.payload[id][0].category,
      }));
      return {
        ...state,
        books,
      };

    default:
      return state;
  }
};

export const addBook = (book) => (dispatch) => {
  ConnectBook.addBook(book, () => {
    dispatch({
      type: ADD_BOOK,
      book,
    });
  });
};

export const removeBook = (id) => (dispatch) => {
  ConnectBook.removeBook(id, () => {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  });
};

export const getBooks = () => (dispatch) => {
  ConnectBook.getBooks((response) => {
    dispatch({
      type: GET_BOOKS,
      payload: response.data,
    });
  });
};

export default booksReducer;
