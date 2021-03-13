import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

// import LogoSVGJS from './../svg/LogoSVGJS';
// import { ReactComponent as NameSVG } from '../../svg/name.svg';
import { ReactComponent as LogoSVG } from '../../svg/logo.svg';

const HomePage = ({pageStyle}) => {
  return(
    <LocalWrapper>
      <NavLink to={routes.PORT}>
        <LogoSVG className="" style={{fill: pageStyle.fill, display: pageStyle.display}}/>
      </NavLink>
    </LocalWrapper>
  );
};

const LocalWrapper = styled.div`
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