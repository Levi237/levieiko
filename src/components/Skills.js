import React from 'react';
import styled from 'styled-components';

const Skills =()=> {
    return(
        <Container>
            <h1>Skills</h1>
            <br/>
            <section>
              Liquid
               | 
              Shopify
               | 
              WordPress
               | 
              MailChimp
               | 
              PhotoShop
              <span> | </span><br/>
              React
               | 
              Firebase
               | 
              NodeJs
               | 
              GitHub
               | 
              Git 
              <span> | </span><br/>
              CSS
               |
              HTML
               | 
              JavaScript
               | 
              VanillaJS
            </section>
      </Container>
        );
};

const Container = styled.div`
  h2 {
    padding-top: 2%;
  }
  section {
    text-align: center;
    padding: 2% 0% 40px;
  }
  br {
    display: none;
  }
  @media screen and (max-width: 980px){
    section {
      margin: 0 auto;
      span {
        display: none;
      }
      br {
        display: block;
      }
    }
  }
`;

export default Skills; 