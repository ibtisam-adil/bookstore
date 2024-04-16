import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Books from './components/bookList/Books';
import Form from './components/form/Form';

function App() {
  const [books, setBooks] = useState([]);
  const addBookHandler = (bookData) => {
    setBooks((prevBooks) => [bookData, ...prevBooks]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <>
                {books.length > 0 && books.map((book) => (
                  <Books
                    key={book.title}
                    title={book.title}
                    author={book.author}
                    category={book.category}
                  />
                ))}
                {books.length === 0 && (
                  <div style={{ textAlign: 'center', color: 'black', fontSize: '2rem' }}>
                    <h2>There are no Books yet.</h2>
                    <p>Start adding some!</p>
                  </div>
                )}
                <div className="seperator-line" />
                <Form key="form" onAddBook={addBookHandler} />
              </>
            )}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
