import React from 'react';
import styled from 'styled-components';

const HomePage =()=> {
    return(
        <Container>
            <img src="logo.png" alt="levieiko.com"/>
        </Container>
      );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default HomePage;