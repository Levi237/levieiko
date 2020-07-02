import React from 'react';
import styled from 'styled-components';

const Clients =({})=> {
    return(
            <Container>
                <img src="./clients/fitplan-giftcard.png"/>
                <img src="./clients/heatseeker.png"/>
                <img src="./clients/it-afterhours.png"/>
                <img src="./clients/prana-wellness.png"/>
            </Container>
        );
};

const Container = styled.div`
  position: relative;
  text-align: center;
  background-color: #fff;
  scroll-snap-align: start;
  img{
      width: 500px;
  }
`;

export default Clients;