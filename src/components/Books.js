import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const newBooks = books.books;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [newBooks.length]);

  return (
    <div>
      <ul className="books">
        { newBooks.length > 0 ? newBooks.map((book) => (<Book key={book.id} book={book} />)) : ''}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
