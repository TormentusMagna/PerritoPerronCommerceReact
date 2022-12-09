import styled from 'styled-components';
import CategoryItem from './CategoryItem';

const MainWrapper = styled.main`
  padding: 3rem;
  div.categoriesWrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-inline: auto;
    width: 80%;
  }
`;

const CategoryListContainer = ({ productos, categoria }) => {
  const productoFiltrado = productos.filter(
    (item) => item.category === categoria
  );
  return (
    <MainWrapper>
      <div className='categoriesWrapper'>
        {productoFiltrado.map((item) => (
          <CategoryItem {...item} />
        ))}
      </div>
    </MainWrapper>
  );
};

export default CategoryListContainer;
