import React, { Component } from 'react';
import styled               from 'styled-components';

import Header   from './components/Header';
import About    from './components/About';
import Skills   from './components/Skills';
import Clients  from './components/Clients';
import Footer   from './components/Footer';

export default class App extends Component {
  render (){
    return (
      <AppContainer>
        <HeroImage/>
        <BodyContainer>    

          <HeaderContainer>
            <Header/>
          </HeaderContainer>

          <AboutContainer>
            <About/>
            <br/><br/><br/><br/>
          </AboutContainer>

          <SkillsContainer>
            <Skills/>
            <Clients/>
          </SkillsContainer>

          <FooterContainer>
            <Footer/>
          </FooterContainer>
        </BodyContainer>        
      </AppContainer>
    );
  }
}

const HeaderContainer = styled.div`
  color: #fff;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`;
const AboutContainer = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 10vh;

  background-attachment: fixed;
  background-color: #fff;
  background-image: url(about.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 60%;

  position: relative;
  scroll-snap-align: start;

@media screen and (max-width: 900px) {
    background-size: cover!important;
    background-position: 70% center;

    padding-top: 5vh;
    height: 95vh;
}
`;
const SkillsContainer = styled.div`
  position: relative;
  text-align: center;
  background-color: #fff;
  scroll-snap-align: start;
  margin-top: 0;
`;
const FooterContainer = styled.div`
  scroll-snap-align: start;
  height: 400px;
  background-color: #fff;
  position: relative;
`;
const BodyContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
`;
const AppContainer = styled.div`
  font-family: Helvetica;
  h1,h2,h3,ul {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 100%;
  }
`;
const HeroImage = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(background/header-hero.png);
  background-size: cover;
  background-position: left;

  position: fixed;
  z-index: -100;

  @media screen and (max-width: 900px){
    background-position: 23%;
  }
`;