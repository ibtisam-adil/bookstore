import { useSelector } from 'react-redux';
import './categories.css';

const Categories = () => {
  const category = useSelector((state) => state.categoriesReducer.category);
  return (
    <div className="page2">
      <p className="p2-heading">
        {category}
      </p>
    </div>
  );
};
export default Categories;
