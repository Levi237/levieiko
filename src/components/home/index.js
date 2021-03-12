import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

// import LogoSVGJS from './../svg/LogoSVGJS';
import { ReactComponent as NameSVG } from '../../svg/Levi.svg';
// import { ReactComponent as LogoSVG } from '../../svg/logo.svg';

const HomePage = ({pageStyle}) => {
  return(
    <LocalWrapper>
      <NavLink to={routes.PORT}>
        {/* <NameSVG className="" style={{fill: pageStyle.color, display: pageStyle.display}}/> */}
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