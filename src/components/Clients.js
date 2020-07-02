import React from 'react';
import styled from 'styled-components';

const Clients =({})=> {
    return(
            <ClientsContainer>
                This is the Client Container
            </ClientsContainer>
        );
};

const ClientsContainer = styled.div`
  position: relative;
  text-align: center;
  background-color: #fff;
  scroll-snap-align: start;
`;

export default Clients;