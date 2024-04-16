import React, { useState, useEffect } from 'react';
import './books.css';
import PropTypes from 'prop-types';

const Books = ({ title, author, category }) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressEndValue = 65;
  const speed = 100;

  useEffect(() => {
    const progress = setInterval(() => {
      setProgressValue((prevProgress) => {
        if (prevProgress === progressEndValue) {
          clearInterval(progress);
          return prevProgress;
        }
        return prevProgress + 1;
      });
    }, speed);

    return () => clearInterval(progress);
  }, [progressEndValue, speed]);

  return (
    <section className="book-card">
      <div className="main">
        <div className="book-detail">
          <p className="book-category">{category}</p>
          <h2 className="book-heading">{title}</h2>
          <p className="book-author">{author}</p>
          <div className="buttons">
            <button className="btn" type="submit">Comments</button>
            <button className="btn" type="submit">Remove</button>
            <button className="btn" type="submit">Edit</button>
          </div>
        </div>
        <div className="book-progress">
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                background: `conic-gradient(
              #4d5bf9 ${progressValue * 3.6}deg,
              #cadcff ${progressValue * 3.6}deg
            )`,
              }}
            />
            <div className="progress-value">
              <p>
                {progressValue}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
          </div>
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

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
