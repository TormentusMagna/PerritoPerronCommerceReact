import { useParams } from 'react-router-dom';
import CategoryListContainer from '../components/categories/CategoryListContainer';

const Categories = ({ productos }) => {
  let { name } = useParams();
  //   console.log(name);
  return <CategoryListContainer productos={productos} categoria={name} />;
};

export default Categories;
