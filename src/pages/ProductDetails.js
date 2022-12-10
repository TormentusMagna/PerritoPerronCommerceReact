import { useParams } from 'react-router-dom';
import DetailsListContainer from '../components/details/DetailsListContainer';

const ProductDetails = ({ productos }) => {
  const { name } = useParams();
  return <DetailsListContainer productos={productos} productName={name} />;
};

export default ProductDetails;
