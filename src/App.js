import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

export default class App extends Component {
  render (){
    return (
      <AppContainer>
        Hello World
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
background-color: pink;
`;
