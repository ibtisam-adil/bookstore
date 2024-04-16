import { useState } from 'react';
import './form.css';
import PropTypes from 'prop-types';

const Form = ({ onAddBook }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const titleChangeHandler = (event) => {
    setBookTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setBookAuthor(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setBookCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const bookData = {
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
    };
    onAddBook(bookData);
  };

  return (
    <form onSubmit={submitHandler}>
      <h3 className="form-title">ADD NEW BOOK</h3>
      <div className="input-field">
        <input
          type="text"
          className="title"
          placeholder="Add Title"
          required
          onChange={titleChangeHandler}
        />
        <input
          type="text"
          className="author"
          placeholder="Add Author"
          required
          onChange={authorChangeHandler}
        />
        <input
          type="text"
          className="category"
          placeholder="Add Category"
          required
          onChange={categoryChangeHandler}
        />
        <button type="submit" className="submit">Add Book</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default Form;
