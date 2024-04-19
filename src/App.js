import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Books from './components/book/Books';
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
                <Books books={books} />
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
