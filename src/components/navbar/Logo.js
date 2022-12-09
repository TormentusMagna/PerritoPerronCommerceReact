import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ImgLogo from '../../img/perrito_perron_logo.jpg';

const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 15%;
  &:hover {
    cursor: pointer;
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    img {
      margin-right: 5px;
      height: auto;
      width: 33%;
    }
    h1 {
      color: #fff;
      font-size: clamp(16px, 16px + 2vw, 19px);
      text-shadow: 2px 2px black;
      text-transform: uppercase;
      width: 63%;
    }
  }
`;

const Logo = ({ clickAction }) => {
  return (
    <LogoWrapper>
      <Link to='/'>
        <img src={ImgLogo} alt='' />
        <h1>El perrito perrón</h1>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
