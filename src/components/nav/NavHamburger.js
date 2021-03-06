import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { ReactComponent as LogoSVG } from '../svg/logo.svg';


const NavHamburger = ({ toggleMenu, pageStyle }) => {
  return(<>
    <Logo>
      <NavLink to={routes.HOME}>
        <LogoSVG style={{fill: pageStyle.color, display: pageStyle.displayLogo}}/>
      </NavLink>
    </Logo>
      {/* <Logo src="./icons/logo.svg" style={{display: pageStyle.displayLogo, filter: pageStyle.logoColor}}/> */}
    <Hamburger name="toggleMenu" onClick={(e) => toggleMenu(e)}>
      <section style={{backgroundColor: pageStyle.color}}/>
      <section style={{backgroundColor: pageStyle.color}}/>
      <section style={{backgroundColor: pageStyle.color}}/>
    </Hamburger>
  </>);
};

const Logo = styled.div`
  position: absolute;
  z-index:999;
  left:0;

  width: 36px;
  margin: 5vw 0 0 5vw;
  // &::after {
  //   content: "LeviEiko";
  // }
`;
const Hamburger = styled.div`
  position: absolute;
  z-index: 999;
  right: 0;

  margin: 5vw 5vw 0 0;
  &:hover{
    cursor: pointer;
  }
  section {
    margin: 6px 0;
    width: 35px;
    height: 4px;
  }
  @media screen and (max-width: 945px) {
  }
`;

export default NavHamburger;