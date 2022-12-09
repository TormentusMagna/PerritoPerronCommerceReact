import ItemListContainer from '../components/main/ItemListContainer';

const HomePage = ({ productos }) => {
  console.log(productos);
  return (
    <ItemListContainer greeting='Bienvenido al perrito perrón, tienda de accesorios y novedades para perros.' />
  );
};

export default HomePage;
