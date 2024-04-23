import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from './Booklist';

const Books = () => {
  const bookData = useSelector((state) => state.bookReducer.books);
  return (
    <div className="book-data">
      { bookData.length > 0 ? (
        bookData.map((data) => (
          <Booklist
            key={data.title}
            title={data.title}
            author={data.author}
            category={data.category}
            id={data.id}
          />
        ))
      ) : (
        <div className="default">
          <h2>There are no Books yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </div>
  );
};

export default Books;
