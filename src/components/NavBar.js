import React       from 'react';
import styled      from 'styled-components';

const NavBar = ({toggleHamburger }) => {
  return(
    <NavContainer>
      <Hamburger 
        name="toggleHamburger" 
        onClick={(e) => toggleHamburger(e)}
      >
        <><HomePatties></HomePatties><HomePatties></HomePatties><HomePatties></HomePatties></>
      </Hamburger>
    </NavContainer>);
};

const NavContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 99;
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
background-color: #fff;
`;

export default NavBar;