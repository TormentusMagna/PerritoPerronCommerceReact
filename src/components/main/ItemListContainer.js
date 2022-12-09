import styled from 'styled-components';
import Item from './Item';

const MainWrapper = styled.main`
  padding: 3rem;
  div.greeting {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-inline: auto;
    width: 80%;
  }
`;

const ItemListContainer = ({ productos }) => {
  return (
    <MainWrapper>
      <div className='greeting'>
        {productos.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </div>
    </MainWrapper>
  );
};

export default ItemListContainer;
