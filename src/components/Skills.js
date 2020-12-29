import React from 'react';
import styled from 'styled-components';

const Skills =()=> {
    return(
        <Container>
            <h1>Skills</h1>
            <br/>
            <section>
            HTML5 | CSS3 | JavaScript | React | NodeJs | Git | GitHub | VanillaJS | Firebase | Shopify | WordPress | MailChimp |  PhotoShop
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
    padding: 2% 10% 40px;
  }
`;

export default Skills;