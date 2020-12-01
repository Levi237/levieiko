import React, { Component } from 'react';
import styled               from 'styled-components';

import Header   from './components/Header';
// import About    from './components/About';
// import Skills   from './components/Skills';
// import Clients  from './components/Clients';
// import ProjectsFlip from './components/ProjectsFlip';
// import Projects from './components/Projects';
// import Footer   from './components/Footer';
import Nav      from './components/Nav';
import NavBar   from './components/NavBar';

// import Vote   from './components/Vote';

export default class App extends Component {
  toggleHamburger = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  render (){
    return (
      <AppContainer>
          <Nav toggleHamburger={this.toggleHamburger}/>
        <HeroImage/>
        <BodyContainer>    
          <NavBar 
            toggleHamburger={this.toggleHamburger}
            // toggleEmailSignup={this.toggleEmailSignup}
          /> 
          <HeaderContainer>
            <Header/>
          </HeaderContainer>

          {/* <AboutContainer>
            <About/>
            <br/><br/><br/><br/>
          </AboutContainer> */}

          {/* <SkillsContainer>
            <Skills/>
          </SkillsContainer> */}
          {/* <ClientsContainer>
            <Clients/>
          </ClientsContainer> */}
          {/* <SnappBottom/> */}
          {/* <ProjectsContainer>
          <h1>Projects</h1>
            <ProjectsFlip/>
            <Projects/>
          </ProjectsContainer> */}
          {/* <FooterContainer>
            <Footer/>
          </FooterContainer> */}
        </BodyContainer>        
      </AppContainer>
    );
  }
}
// const SnappBottom = styled.div`
//   height: 20px;
//   background-color: #fff;
//   scroll-snap-align: end; 
// `;
// const ClientsContainer = styled.div`
//   scroll-snap-align: start; 
//   background-color: #fff;

// `;
const HeaderContainer = styled.div`
  color: #fff;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`;
// const AboutContainer = styled.div`
//   width: 100%;
//   height: 90vh;
//   padding-top: 10vh;

//   background-attachment: fixed;
//   background-color: #fff;
//   background-image: url(about.png);
//   background-position: center center;
//   background-repeat: no-repeat;
//   background-size: 60%;

//   position: relative;
//   scroll-snap-align: start;

// @media screen and (max-width: 900px) {
//     background-size: cover!important;
//     background-position: 70% center;

//     padding-top: 5vh;
//     height: 95vh;
// }
// `;
// const SkillsContainer = styled.div`
//   position: relative;
//   text-align: center;
//   background-color: #fff;
//   scroll-snap-align: start;
//   margin-top: 0;
// `;
// const ProjectsContainer = styled.div`
//   color: #fff;
//   text-align: center;
//   scroll-snap-align: start;
//   background-attachment: local;
//   background-image: url('./background/milkyway.png');
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   height: 500px;
//   h1,h2 {
//     color: #000;
//     text-shadow: 0px 0px 3px rgba(255,255,255,0.9);
//     padding: 20px 0;
//   }
//   @media screen and (max-width: 680px) {
//     overflow: scroll;
//     padding-bottom: 20px;
//     height: 100vh;
//   }
// `;
// const FooterContainer = styled.div`
//   scroll-snap-align: start;
//   height: 400px;
//   background-color: #fff;
//   position: relative;
// `;
const BodyContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
`;
const AppContainer = styled.div`
  font-family: Helvetica;
  h1,h2,h3,ul {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 100%;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
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