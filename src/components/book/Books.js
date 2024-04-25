import React from 'react';
import { useSelector } from 'react-redux';
import Booklist from './Booklist';

const Books = () => {
  const isLoading = useSelector((state) => state.bookReducer.isLoading);
  const bookData = useSelector((state) => state.bookReducer.books);

  const renderLoadingState = () => (
    <div className="loading">Loading...</div>
  );

  const renderBookList = () => (
    bookData.map((data) => (
      <Booklist
        key={data.title}
        title={data.title}
        author={data.author}
        category={data.category}
        id={data.id}
      />
    ))
  );

  const renderNoBooksMessage = () => (
    <div className="default">
      <h2>There are no Books yet.</h2>
      <p>Start adding some!</p>
    </div>
  );

  let content;

  if (isLoading) {
    content = renderLoadingState();
  } else if (bookData.length > 0) {
    content = renderBookList();
  } else {
    content = renderNoBooksMessage();
  }

  return <div className="book-data">{content}</div>;
};
export default Books;
