import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Books from './components/books/Books';
import Form from './components/form/Form';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
