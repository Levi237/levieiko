import React from 'react';
import styled from 'styled-components';

const Skills =(props)=> {
    return(
        <Container>
            <br/><br/>
            <h2>Skills</h2>
            <section>
            HTML5 | CSS3 | JavaScript | Mongoose | MongoDB | Express | React | NodeJs | Flask | Python3 | Git | GitHub | Dreamweaver | Bootstrap | jQuery | VanillaJS | Firebase | Shopify | WordPress | MailChimp |  PhotoShop
            </section>
            {props.children}
      </Container>
        );
};

const Container = styled.div`
  h2 {
    padding-top: 2%;
  }
  section {
    padding: 2% 10%;
  }
`;

export default Skills;