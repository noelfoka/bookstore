import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <ul className="books">
        { books.length > 0 ? books.map((book) => (<Book key={book.id} book={book} />)) : ''}
      </ul>
      <AddBook />
    </div>
  );
};

export default Books;
