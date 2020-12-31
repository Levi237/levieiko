import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import NavMenu              from './components/nav/NavMenu';
import NavHamburger         from './components/nav/NavHamburger';

import EmailConfirmation    from './components/contact/EmailConfirmation';
import EmailSignup          from './components/contact/EmailSignup';
import Contact              from './components/contact/Contact';

import Home               from './components/Home';
import About                from './components/About';
import Skills               from './components/Skills';
import Clients              from './components/Clients';
import ProjectsFlip         from './components/ProjectsFlip';
import Projects             from './components/Projects';

export default class App extends Component {
  state = {
    emailContact: "",
    pageStyle: {
      home: {
        hamburgerColor: "#fff",
        logoColor: "invert(0)",
        displayLogo: "none",
      },
      about: {
        hamburgerColor: "#fff",
        logoColor: "invert(0)",
        displayLogo: "none",
      },
      services: {
        hamburgerColor: "#fff",
        logoColor: "invert(0)",
        displayLogo: "inline-block",
      },
      mail: {
        hamburgerColor: "#181717",
        logoColor: "invert(1)",
        displayLogo: "inline-block",
      },
      root: {
        hamburgerColor: "#fff",
        logoColor: "invert(0)",
        displayLogo: "none",
      },

    },
  }

  toggleMenu = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };

  toggleEmailSignup = (e) => {
    const emailForm = document.getElementById('email');
    emailForm.classList.toggle('active');
    emailForm.classList.toggle('inactive');
    this.setState({
      emailContact: e.currentTarget.value
    });
  };

  render (){

    const { emailContact, pageStyle } = this.state
    console.log(pageStyle.home.hamburgerColor, "<===== pageStyle.test")
    return (
      <AppContainer>

        <NavMenu toggleMenu={this.toggleMenu}/>
        <EmailSignup contactType={emailContact} toggleEmailSignup={this.toggleEmailSignup}/>

        <Switch>
          <Route path={routes.CNFM} exact render={() => <EmailConfirmation/> }/>     
          <Route path={routes.HOME} exact render={() => <HeroImageAnimation/>}/>
          <Route path={routes.SERV} exact render={() => <HeroImage/>}/>
          <Route path={routes.ROOT} render={() => <HeroImageAnimation/>}/>
        </Switch>

        <BodyContainer>
          <Switch>         
            <Route path={routes.HOME} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} logoColor={pageStyle.home.logoColor} displayLogo={pageStyle.home.displayLogo} hamburgerColor={pageStyle.home.hamburgerColor}/>}/>
            <Route path={routes.INFO} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} logoColor={pageStyle.about.logoColor} displayLogo={pageStyle.about.displayLogo} hamburgerColor={pageStyle.about.hamburgerColor}/>}/>
            <Route path={routes.SERV} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} logoColor={pageStyle.services.logoColor} displayLogo={pageStyle.services.displayLogo} hamburgerColor={pageStyle.services.hamburgerColor}/>}/>
            <Route path={routes.MAIL} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} logoColor={pageStyle.mail.logoColor} displayLogo={pageStyle.mail.displayLogo} hamburgerColor={pageStyle.mail.hamburgerColor}/>}/>
            <Route path={routes.ROOT} render={() => <NavHamburger toggleMenu={this.toggleMenu} logoColor={pageStyle.root.logoColor} displayLogo={pageStyle.root.displayLogo} hamburgerColor={pageStyle.root.hamburgerColor}/>}/>
          </Switch>
          <ContentContainer>
            <Switch>         
              <Route path={routes.HOME} exact render={() => <Home/>}/>
              <Route path={routes.MAIL} exact render={() => <Contact contactType={emailContact}></Contact>}/>
              <Route path={routes.INFO} exact render={() => <About toggleEmailSignup={this.toggleEmailSignup}/>}/>
              <Route path={routes.SERV} exact render={() => <div style={{backgroundColor: "rgba(19,17,17,.8)"}}><Skills/><Clients/><ProjectsFlip/><Projects/></div>}/>
              <Route path={routes.ROOT} render={() => <Home/>}/>
            </Switch>
          </ContentContainer>
        </BodyContainer>   

      </AppContainer>
    );
  }
}

const ContentContainer = styled.div`
  color: #fff;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`;

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
  
  position: fixed;
  z-index: -100;


  @media screen and (max-width: 900px){
    background-position: 23%;
  }
`;
const HeroImageAnimation = styled(HeroImage)`
  background-repeat: repeat-x;
  animation: slideleft 900s infinite linear;

  @keyframes slideleft {
    0% { background-position: 0%; }
    50% { background-position: 100%; }
    100% { background-position: 0%; }
  }
`;