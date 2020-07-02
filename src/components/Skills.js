import React from 'react';
import styled from 'styled-components';

const Skills =({})=> {
    return(
        <SkillsContainer>
            <br/><br/>
            <h2>Skills</h2>
            <section>
            HTML5 | CSS3 | JavaScript | Mongoose | MongoDB | Express | React | NodeJs | Flask | Python3 | Git | GitHub | Dreamweaver | Bootstrap | jQuery | VanillaJS | Firebase | Shopify | WordPress | MailChimp |  PhotoShop
            </section>
      </SkillsContainer>
        );
};

const SkillsContainer = styled.div`
  position: relative;
  text-align: center;
  background-color: #fff;
  scroll-snap-align: start;
  height: 100vh;
  margin-top:
  h2 {
    padding-top: 2%;
  }
  section {
    padding: 2% 10%;
  }
`;

export default Skills;