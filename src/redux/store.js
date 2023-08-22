import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const rootReducer = configureStore({
  books: booksReducer,
  categories: categoryReducer,
});

export default rootReducer;
