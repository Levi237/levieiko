import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import { ReactComponent as LogoSVG } from '../svg/logo.svg';

const HomePage = ({ pageStyle }) => {
  return(<>
    <Logo>
      <NavLink to={routes.PORT}>
        <LogoSVG style={{fill: pageStyle.color}}/>
      </NavLink>
    </Logo>
  </>);
};

const Logo = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    a {
        height: 150px!important;
        width: 150px!important;
    }
    
`;

export default HomePage;