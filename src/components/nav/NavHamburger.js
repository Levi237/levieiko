import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { ReactComponent as LogoSVG } from '../svg/logo.svg';

const NavHamburger = ({ toggleMenu, pageStyle }) => {
  return(<>
    <Logo>
      <NavLink to={routes.HOME}>
        <LogoSVG className="" style={{fill: pageStyle.fill, display: pageStyle.displayLogo}}/>
      </NavLink>
    </Logo>
    <Hamburger name="toggleMenu" onClick={(e) => toggleMenu(e)}>
      <section style={{backgroundColor: pageStyle.color}}/>
      <section style={{backgroundColor: pageStyle.color}}/>
      <section style={{backgroundColor: pageStyle.color}}/>
    </Hamburger>
  </>);
};

const GlobalDiv = styled.div`
  position: absolute;
  z-index:999;
  top: 40px;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 945px) {
    top: 5vw;
  }
`;
const Logo = styled(GlobalDiv)`
  left: 5vw;
  width: 36px;
`;
const Hamburger = styled(GlobalDiv)`
  right: 5vw;
  section {
    margin: 6px 0;
    width: 35px;
    height: 4px;
  }
`;

export default NavHamburger;