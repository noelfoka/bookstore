import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import categoryReducer from './categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});

export default store;
