import './navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <span className="bookstore-cms">Bookstore CMS</span>
      {/* <span className="books">BOOKS</span> */}
      <NavLink to="/" className="books">
        BOOKS
      </NavLink>
      {/* <span className="categories">CATEGORIES</span> */}
      <NavLink to="/categories" className="categories">
        CATEGORIES
      </NavLink>
    </div>
    <div className="circle">
      <span className="login">
        <FaUserAlt />
      </span>
    </div>
  </nav>
);

export default Navbar;
