import React  from 'react';
import styled from 'styled-components';

const Footer =()=> {
    return(
        <Container>
          <Prayer></Prayer>
        </Container>
        );
};

const Prayer = styled.div`
margin-top: 67vh;
height: 100vh;
background-image: url(om-mani-padme-hum.png);
background-size: 30%;
background-position: center;
background-repeat: no-repeat;
background-color: transparent;
@media screen and (max-width: 900px) {
    margin-top: 100vh;
    background-size: 80%;
    background-position: center 20%;
}
`;

const Container = styled.div`
height: 100vh;
overflow: scroll;
background-image: url(./background/goblin-valley.jpg);
background-size: contain;
background-position: center;
background-repeat: no-repeat;
background-color: white;

  h2 {
    padding-top: 2%;
  }
  section {
    padding: 2% 10%;
    font-size: 14px;
  }
  @media screen and (max-width: 900px) {
    background-size: cover!important;
}
`;

export default Footer;