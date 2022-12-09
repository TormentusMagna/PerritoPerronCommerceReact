import styled from 'styled-components';

const MainWrapper = styled.main`
  padding: 3rem;
  div.gretting {
    border: 1px solid black;
    height: 100%;
    margin-inline: auto;
    min-height: 100vh;
    width: 80%;
  }
`;

const ItemListContainer = ({ greeting }) => {
  return (
    <MainWrapper>
      <div className='gretting'>
        <h2>{greeting}</h2>
      </div>
    </MainWrapper>
  );
};

export default ItemListContainer;
