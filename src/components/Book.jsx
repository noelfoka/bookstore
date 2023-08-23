import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book, dispatch }) => {
  const handleDelete = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Book);
