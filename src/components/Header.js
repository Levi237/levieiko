import React from 'react';
import styled from 'styled-components';

const Header =(props)=> {
    return(
        <Container>
          <h1></h1>
            {/* <h1>Levi Eiko Winans</h1> */}
            {/* <section>
              <span>+ 646 206 8777</span>
              <br/>
              <span>LeviEiko@gmail.com</span>
            </section> */}
            <img src="logo.png" alt="levieiko.com"/>
      </Container>
        );
};

const Container = styled.div`
h1 {
    font-size: 46px;
    padding: 10px;
  }
  section {
    text-align: right;

    margin-top: -40px;
    position: absolute;
    right: 10px;
  }
  img {
    display: block;
    margin: 30vh auto;
  }
  @media screen and (max-width: 900px){
    h1 {
      text-align: center;
    }
    section {
      font-size: 5vw;
      font-weight: bold;
      background-image: linear-gradient(transparent, rgba(0,0,0,.5));
      padding: 5%;
      width: 100%;
      bottom: 0;
      right: 0;
    }
`;

export default Header;