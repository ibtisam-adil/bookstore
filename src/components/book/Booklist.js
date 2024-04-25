import './booklist.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Progress from '../progress/Progress';
import { deleteBook } from '../../redux/books/booksSlice';

const Booklist = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();

  return (
    <section className="book-card">
      <div className="main">
        <div className="book-detail">
          <p className="book-category">{category}</p>
          <h2 className="book-heading">{title}</h2>
          <p className="book-author">{author}</p>
          <div className="buttons">
            <button className="btn" type="submit">Comments</button>
            <button className="btn" type="submit" onClick={() => dispatch(deleteBook(id))}>Remove</button>
            <button className="btn" type="submit">Edit</button>
          </div>
        </div>
        <div className="book-progress">
          <Progress />
          <span className="seperator" />
        </div>
        <div className="book-status">
          <p className="chapter-heading">Current chapter</p>
          <p>chapter 3 of 5</p>
          <button type="submit" className="update-progress">Update progress</button>
        </div>
      </div>
    </section>
  );
};

Booklist.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Booklist;
