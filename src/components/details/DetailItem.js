import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid grey;
  border-radius: 7px;
  box-shadow: 0 0 8px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 0 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  width: 250px;
  img {
    margin-bottom: 1rem;
    height: 150px;
    width: 150px;
  }
  h2 {
    font-size: 16px;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  p {
    text-align: center;
  }
  span {
    margin: 1rem 0;
    font-size: 20px;
    font-weight: bolder;
  }
  button {
    cursor: pointer;
    font-weight: bolder;
    text-transform: uppercase;
    padding: 1rem;
    margin: 1rem;
  }
`;

const DetailItem = ({ image, name, description, price }) => {
  return (
    <Card>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <span>$ {price}</span>
    </Card>
  );
};

export default DetailItem;
