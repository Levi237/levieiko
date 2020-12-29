import React       from 'react';
import styled      from 'styled-components';

const NavHamburger = ({ toggleMenu, colorThis }) => {
  return(
    <NavContainer>
      <Hamburger 
        name="toggleMenu" 
        onClick={(e) => toggleMenu(e)}
      >
        <><HomePatties style={{backgroundColor: colorThis}}/><HomePatties style={{backgroundColor: colorThis}}/><HomePatties style={{backgroundColor: colorThis}}/></>
      </Hamburger>
    </NavContainer>);
};

const NavContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 999;
 `;

const Hamburger = styled.div`
  margin: 80px 100px 0 0;
  section {
    margin: 6px 0;
    width: 35px;
    height: 4px;
  }
  @media screen and (max-width: 945px) {
    margin: 5vw 5vw 0 0;
  }
`;
const HomePatties = styled.section`

`;

export default NavHamburger;