import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

/* eslint-disable react/prop-types */
const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const clickEvent = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className="book">
      <ul>
        <li>{book.title}</li>
        <li>written by</li>
        <li>{book.author}</li>
      </ul>
      <button type="button" className="remove" onClick={clickEvent}>Remove</button>
    </div>
  );
};

export default Book;
