import { combineReducers, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoryReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
