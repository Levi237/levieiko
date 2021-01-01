import React, { Component } from 'react';
import styled               from 'styled-components';

export default class Photography extends Component {
    render(){
        return (
            <Container>
                <GoblinAnimation/>
            </Container>
        );
    };
};
const Container = styled.div`

`;

const GoblinAnimation = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(background/goblin-valley.jpg);
  background-size: cover;
  background-repeat: repeat-x;
  animation: slideleft 900s infinite linear;

  @media screen and (max-width: 900px){
    background-position: 23%;
  }
`;
