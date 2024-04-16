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
                {books.map((book) => (
                  <Books
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    category={book.category}
                  />
                ))}
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
