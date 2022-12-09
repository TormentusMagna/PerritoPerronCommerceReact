import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoriesMenuWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  width: 65%;
  a {
    text-decoration: none;
  }
  li {
    border-left: 2px solid #fff;
    border-right: 2px solid #fff;
    color: #fff;
    font-size: clamp(16px, 16px + 2vw, 18px);
    font-weight: bold;
    padding: 0 10px;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
    }
  }
`;

const CategoriesMenu = () => {
  return (
    <CategoriesMenuWrapper>
      <Link to='/category/correas'>
        <li>Correas</li>
      </Link>

      <Link to='/category/ropa'>
        <li>Ropa</li>
      </Link>

      <Link to='/category/juguetes'>
        <li>Juguetes</li>
      </Link>
    </CategoriesMenuWrapper>
  );
};

export default CategoriesMenu;
