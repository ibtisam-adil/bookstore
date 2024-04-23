import { useState } from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { createBook } from '../../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createBook({ title, author, category }));
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

export default Form;
