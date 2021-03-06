import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { ReactComponent as LogoSVG }      from '../../svg/brand/logo.svg';
import { ReactComponent as HamburgerSVG } from '../../svg/icons/hamburger.svg';

const NavBar = ({ toggleMenu, pageStyle }) => {
  return(<>
    <Logo>
      <NavLink to={routes.ROOT}>
        <LogoSVG className="" style={{fill: pageStyle.fill, display: pageStyle.displayLogo}}/>
      </NavLink>
    </Logo>
    <Hamburger name="toggleMenu" onClick={(e) => toggleMenu(e)}>
      <HamburgerSVG style={{fill: pageStyle.color}}/>
    </Hamburger>
  </>);
};

const GlobalDiv = styled.div`
  position: absolute;
  z-index:999;
  top: 40px;
  width: 36px;
  height: 36px;
  &:hover{
    cursor: pointer;
  }
  @media screen and (max-width: 945px) {
    top: 5vw;
  }
`;
const Logo = styled(GlobalDiv)`
  left: 5vw;
`;
const Hamburger = styled(GlobalDiv)`
  right: 5vw;
`;

export default NavBar;