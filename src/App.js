import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Books from './components/book/Books';
import Form from './components/form/Form';
import Categories from './components/categories/Categories';
import { checkStatus } from './redux/categories/categoriesSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkStatus());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Books />
              <div className="seperator-line" />
              <Form key="form" />
            </>
          )}
        />
        <Route
          path="/categories"
          element={<Categories />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
