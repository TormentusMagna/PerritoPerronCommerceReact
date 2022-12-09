import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoriesMenuWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  width: 65%;
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
      <Link>
        <li to='/category/:name'>Correas</li>
      </Link>

      <Link>
        <li to='/category/:name'>Ropa</li>
      </Link>

      <Link>
        <li to='/category/:name'>Juguetes</li>
      </Link>
      {/* <li
        onClick={() => {
          window.location.href = 'https://www.youtube.com';
        }}>
        Correas
      </li>
      <li
        onClick={() => {
          window.location.href = 'https://www.youtube.com';
        }}>
        Ropa
      </li>
      <li
        onClick={() => {
          window.location.href = 'https://www.youtube.com';
        }}>
        Transportadoras
      </li>
      <li
        onClick={() => {
          window.location.href = 'https://www.youtube.com';
        }}>
        Juguetes
      </li>
      <li
        onClick={() => {
          window.location.href = 'https://www.youtube.com';
        }}>
        Camas
      </li> */}
    </CategoriesMenuWrapper>
  );
};

export default CategoriesMenu;
