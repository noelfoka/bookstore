import { combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const store = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

export default store;
