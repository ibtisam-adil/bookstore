import './books.css';

const Books = () => (
  <section className="book-card">
    <div className="main">
      <div className="book-detail">
        <p>Fiction</p>
        <h2>To Kill a Mockingbird</h2>
        <p>Harper Lee</p>
        <div className="buttons">
          <button type="submit">Comments</button>
          <div className="line" />
          <button type="submit">Remove</button>
          <div className="line" />
          <button type="submit">Edit</button>
        </div>
      </div>
    </div>
  </section>
);

export default Books;
