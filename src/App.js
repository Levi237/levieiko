import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

export default class App extends Component {
  render (){
    return (
      <AppContainer>
        <HeaderImage>
        </HeaderImage>
        <BodyContainer>

        Hello World
        </BodyContainer>
      </AppContainer>
    );
  }
}
const BodyContainer = styled.div`

`;
const HeaderImage = styled.div`
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  background-image: url(background/header-hero.png);
  background-size: cover;
  background-position: left;
`;
const AppContainer = styled.div`
  font-family: Helvetica;
  h1 {
    font-family: 'Capture it';
  }
`;
