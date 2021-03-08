import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { ReactComponent as LogoSVGtwo } from '../svg/logo.svg';

const NavHamburger = ({ toggleMenu, pageStyle }) => {
  return(<>
    <Logo>
      <NavLink to={routes.HOME}>
        <LogoSVGtwo className="" style={{fill: pageStyle.fill, display: pageStyle.displayLogo}}/>
      </NavLink>
    </Logo>
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