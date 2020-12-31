import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import NavMenu              from './components/nav/NavMenu';
import NavHamburger         from './components/nav/NavHamburger';

import Home                 from './components/Home';
import About                from './components/About';

import EmailConfirmation    from './components/contact/EmailConfirmation';
import EmailSignup          from './components/contact/EmailSignup';
import Contact              from './components/contact/Contact';

import Skills               from './components/portfolio/Skills';
import Clients              from './components/portfolio/Clients';
import ProjectsFlip         from './components/portfolio/ProjectsFlip';
import Projects             from './components/portfolio/Projects';

export default class App extends Component {
  state = {
    emailContact: "",
    pageStyle: {
      home: {
        title: "",
        color: "#fff",
        logoColor: "invert(0)",
        displayLogo: "none",
      },
      about: {
        title: "",
        color: "#181717",
        logoColor: "invert(0)",
        displayLogo: "none",
      },
      portfolio: {
        title: "portfolio",
        color: "#fff",
        logoColor: "invert(0)",
        displayLogo: "inline-block",
      },
      mail: {
        title: "contact",
        color: "#181717",
        logoColor: "invert(1)",
        displayLogo: "inline-block",
      },
      root: {
        title: "",
        color: "#fff",
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

    return (
      <AppContainer>

        <NavMenu toggleMenu={this.toggleMenu}/>
        <EmailSignup contactType={emailContact} toggleEmailSignup={this.toggleEmailSignup}/>

        <Switch>
          <Route path={routes.CNFM} exact render={() => <EmailConfirmation/> }/>     
          <Route path={routes.HOME} exact render={() => <HeroImageAnimation/>}/>
          <Route path={routes.PORT} exact render={() => <HeroImage/>}/>
          <Route path={routes.ROOT} render={() => <HeroImageAnimation/>}/>
        </Switch>

        <BodyContainer>
          <Switch>         
            <Route path={routes.HOME} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.home} />}/>
            <Route path={routes.INFO} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.about} />}/>
            <Route path={routes.PORT} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.portfolio} />}/>
            <Route path={routes.MAIL} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.mail} />}/>
            <Route path={routes.ROOT} render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.root} />}/>
          </Switch>
          <ContentContainer>
            <Switch>         
              <Route path={routes.HOME} exact render={() => <Home/>}/>
              <Route path={routes.MAIL} exact render={() => <Contact contactType={emailContact}></Contact>}/>
              <Route path={routes.INFO} exact render={() => <About toggleEmailSignup={this.toggleEmailSignup}/>}/>
              <Route path={routes.PORT} exact render={() => <div style={{backgroundColor: "rgba(19,17,17,.8)"}}><Skills/><Clients/><ProjectsFlip/><Projects/></div>}/>
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