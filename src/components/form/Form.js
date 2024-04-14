import './form.css';

const Form = () => (
  <form>
    <h3 className="form-title">ADD NEW BOOK</h3>
    <div className="input-field">
      <input type="text" className="title" placeholder="Add Title" value="" />
      <input type="text" className="author" placeholder="Add Author" value="" />
      <input type="text" className="category" placeholder="Add Category" value="" />
      <button type="submit" className="submit">Add Book</button>
    </div>
  </form>
);

export default Form;
