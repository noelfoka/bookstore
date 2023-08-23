import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();
  const addTitle = (event) => setBook({
    ...book,
    title: event.target.value,
  });

  const addAuthor = (event) => setBook({
    ...book,
    author: event.target.value,
  });

  const clickEvent = () => {
    if (book.author && book.title) {
      book.id = uuidv4();
      dispatch(addBook(book));
      setBook({
        title: '',
        author: '',
      });
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Add Title..."
        name="title"
        value={book.title}
        className="addtitle"
        onChange={addTitle}
      />
      <input
        type="text"
        placeholder="Add Author..."
        name="author"
        value={book.author}
        className="addauthor"
        onChange={addAuthor}
      />
      <button
        type="submit"
        className="addsubmit"
        onClick={(e) => {
          e.preventDefault();
          clickEvent();
        }}
      >
        ADD BOOK
      </button>
    </form>
  );
};

export default AddBook;
