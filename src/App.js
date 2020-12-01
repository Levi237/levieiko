import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import NavModal                  from './components/NavModal';
import NavHamburger               from './components/NavHamburger';

import Header   from './components/Header';
import About    from './components/About';
// import Skills   from './components/Skills';
// import Clients  from './components/Clients';
import ProjectsFlip from './components/ProjectsFlip';
// import Projects from './components/Projects';
// import Footer   from './components/Footer';

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
          <NavModal toggleHamburger={this.toggleHamburger}/>
          <Switch>         
            <Route path={routes.HOME} exact render={() => <HeroImage/>}/>
            <Route path={routes.ROOT} exact render={() => <HeroImage/>}/>
          </Switch>
        {/* <HeroImage/> */}
        <BodyContainer>    
          <Switch>         
            <Route path={routes.ROOT} exact render={() => <NavHamburger toggleHamburger={this.toggleHamburger} colorThis={"#fff"}/>}/>
            <Route path={routes.HOME} exact render={() => <NavHamburger toggleHamburger={this.toggleHamburger} colorThis={"#fff"}/>}/>
            <Route path={routes.INFO} exact render={() => <NavHamburger toggleHamburger={this.toggleHamburger} colorThis={"#fff"}/>}/>
            <Route path={routes.SERV} exact render={() => <NavHamburger toggleHamburger={this.toggleHamburger} colorThis={"#000"}/>}/>
          </Switch>

          <HeaderContainer>
          <Switch>         
            <Route path={routes.ROOT} exact render={() => <Header/>}/>
            <Route path={routes.HOME} exact render={() => <Header/>}/>
            <Route path={routes.INFO} exact render={() => <About/>}/>
            <Route path={routes.SERV} exact render={() => <ProjectsFlip/>}/>
            </Switch>
          </HeaderContainer>
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