import axios from 'axios';

const connectURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const bookId = 'Zj9BJJLgZixblvJ42n1G';

const ConnectBook = {
  getBooks: (success) => {
    axios.get(`${connectURL}/apps/${bookId}/books`)
      .then((response) => {
        success(response);
      });
  },

  addBook: (book, success) => {
    axios.post(`${connectURL}/apps/${bookId}/books`, {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    })
      .then((response) => {
        success(response);
      });
  },

  removeBook: (id, success) => {
    axios.delete(`${connectURL}/apps/${bookId}/books/${id}`)
      .then((response) => {
        success(response);
      });
  },
};

export default ConnectBook;
