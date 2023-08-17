import React from 'react';

function AddBook() {
  return (
    <form>
      <h4>Add New Book</h4>
      <input
        type="text"
        placeholder="Add Title ..."
        name="title"
        className="addtitle"
      />
      <input
        type="text"
        placeholder="Add Author"
        name="author"
        className="addauthor"
      />
      <button type="submit" className="addsubmit">
        ADD BOOK
      </button>
    </form>
  );
}

export default AddBook;
