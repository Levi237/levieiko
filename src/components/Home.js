import React from 'react';
import styled from 'styled-components';

// import 

const Home =()=> {
    return(
        <Container>
            <img src="logo.png" alt="levieiko.com"/>
        </Container>
      );
};

const Container = styled.div`
  img {
    margin: calc(50vh - 60px) calc(50vw - 60px);
  }
`;

export default Home;