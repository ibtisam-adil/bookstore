import React from 'react';
import PropTypes from 'prop-types';
import Booklist from './Booklist';

const Books = ({ books }) => (
  <div>
    {books.length > 0 ? (
      books.map((book) => (
        <Booklist
          key={book.title}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))
    ) : (
      <div style={{ textAlign: 'center', color: 'black', fontSize: '2rem' }}>
        <h2>There are no Books yet.</h2>
        <p>Start adding some!</p>
      </div>
    )}
  </div>
);

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Books;
