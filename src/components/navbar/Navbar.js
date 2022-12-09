import styled from 'styled-components';
import CartWidget from './CartWidget';
import CategoriesMenu from './CategoriesMenu';
import Logo from './Logo';

const Header = styled.header`
  background-color: #001952;
  box-shadow: 0 1px 10px black;
  .navBarContent {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin-inline: auto;
    width: 85%;
  }
`;

const NavBar = () => {
  return (
    <Header>
      <div className='navBarContent'>
        <Logo
          clickAction={() => {
            window.location.href = '/';
          }}
        />
        <CategoriesMenu />
        <CartWidget />
      </div>
    </Header>
  );
};

export default NavBar;
