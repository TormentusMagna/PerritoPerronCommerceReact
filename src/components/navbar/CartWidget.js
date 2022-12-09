import styled from 'styled-components';
import CartIcon from '../../img/cart-icon.svg';

const CartTotalItems = styled.div`
  align-items: center;
  background-color: green;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  width: 5%;
  span {
    color: #fff;
    font-size: clamp(16px, 16px + 2vw, 18px);
    font-weight: bold;
    text-shadow: 2px 2px black;
  }
  img {
    height: auto;
    width: 50%;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CartWidget = () => {
  return (
    <CartTotalItems>
      <span>5</span>
      <img src={CartIcon} alt='cart icon' />
    </CartTotalItems>
  );
};

export default CartWidget;
