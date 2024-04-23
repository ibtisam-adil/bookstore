import { useSelector } from 'react-redux';

const Categories = () => {
  const category = useSelector((state) => state.categoriesReducer.category);
  return (
    <div>
      {category}
    </div>
  );
};
export default Categories;
