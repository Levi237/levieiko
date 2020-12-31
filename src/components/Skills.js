import React from 'react';
import styled from 'styled-components';

const Skills =()=> {
    return(
        <Container>
            <h1>Skills</h1>
            <br/>
            <section>
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
              Shopify
               | 
              WordPress
               | 
              MailChimp
               | 
              PhotoShop
              <span> | </span><br/>
              Liquid
               | 
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
  h1 {
    padding-top: 60px;
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
  @media screen and (max-width: 400px){
  }
`;

export default Skills; 