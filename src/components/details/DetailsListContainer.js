import styled from 'styled-components';
import DetailItem from './DetailItem';

const MainWrapper = styled.main`
  padding: 3rem;
  div.detailsWrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-inline: auto;
    width: 80%;
  }
`;

const DetailsListContainer = ({ productos, productName }) => {
  const productoSeleccionado = productos.filter(
    (item) => item.name === productName
  );
  return (
    <MainWrapper>
      <div className='detailsWrapper'>
        {productoSeleccionado.map((item) => (
          <DetailItem {...item} />
        ))}
      </div>
    </MainWrapper>
  );
};

export default DetailsListContainer;
