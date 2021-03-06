import React, { Component } from 'react';
import { Switch, Route, NavLink }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import NavMenu              from './components/nav/NavMenu';
import NavHamburger         from './components/nav/NavHamburger';

import PortfolioPage        from './components/portfolio/PortfolioPage';
import AboutPage            from './components/AboutPage';
import ContactPage          from './components/contact/ContactPage';
import EmailSignup          from './components/contact/EmailSignup';
import EmailConfirmation    from './components/contact/EmailConfirmation';

export default class App extends Component {
  state = {
    // emailContact: "",
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
        color: "#fff",
        logoColor: "invert(0)",
        displayLogo: "inline-block",
      },
      root: {
        title: "",
        color: "#fff",
        logoColor: "invert(0)",
        displayLogo: "none",
      }
    }
  };

  // toggleEmailSignup = (e) => {
  //   const emailForm = document.getElementById('email');
  //   emailForm.classList.toggle('active');
  //   emailForm.classList.toggle('inactive');
  //   this.setState({
  //     emailContact: e.currentTarget.value
  //   });
  // };

  toggleMenu = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
 

  render (){
    const { emailContact, pageStyle } = this.state

    return (
      <AppContainer>

        <NavMenu toggleMenu={this.toggleMenu}/>
        {/* <EmailSignup contactType={emailContact} toggleEmailSignup={this.toggleEmailSignup}/> */}

        <Switch>
          <Route path={routes.HOME} exact render={() => <HeroImageDivAnimation/>}/>
          <Route path={routes.PORT} exact render={() => <HeroImageDiv/>}/>
          <Route path={routes.MAIL} render={() => <GoblinValleyImageAnimation/>}/>
          <Route path={routes.CNFM} exact render={() => <HeroImageDivAnimation/>}/>
          <Route path={routes.ROOT} render={() => <HeroImageDivAnimation/>}/>
        </Switch>

        <BodyContainer>
          <Switch>         
            <Route path={routes.HOME} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.home}/> }/>
            <Route path={routes.CNFM} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.home}/> }/>
            <Route path={routes.MAIL} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.mail}/> }/>
            <Route path={routes.PORT} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.portfolio}/> }/>
            <Route path={routes.INFO} exact render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.about}/> }/>
            <Route path={routes.ROOT} render={() => <NavHamburger toggleMenu={this.toggleMenu} pageStyle={pageStyle.root}/> }/>
          </Switch>
          <ContentContainer>
            <Switch>         
              <Route path={routes.HOME} exact render={() => <NavLink to={routes.PORT}><HomeLogo/></NavLink> }/>
              <Route path={routes.CNFM} exact render={() => <EmailConfirmation/> }/>
              <Route path={routes.MAIL} exact render={() => <ContactPage contactType={emailContact}/> }/>
              <Route path={routes.PORT} exact render={() => <PortfolioPage/> }/>
              <Route path={routes.INFO} exact render={() => <AboutPage /> }/>
              <Route path={routes.ROOT} render={() => <NavLink to={routes.PORT}><HomeLogo/></NavLink> }/>
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
  // scroll-snap-align: start;
  position: relative;
`;

const BodyContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  // scroll-snap-type: y proximity;
`;
const AppContainer = styled.div`
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
const HeroImageDiv = styled.div`
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
const HeroImageDivAnimation = styled(HeroImageDiv)`
  background-repeat: repeat-x;
  animation: slideleft 900s infinite linear;
`;
const GoblinValleyImage = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(background/goblin-valley.jpg);
  background-size: cover;
  
  position: fixed;
  z-index: -100;

  @media screen and (max-width: 900px){
    background-position: 23%;
  }
`;
const GoblinValleyImageAnimation = styled(GoblinValleyImage)`
  background-repeat: repeat-x;
  animation: slideleft 1200s infinite linear;
`;

const HomeLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(logo.png);
  background-repeat: no-repeat;
  background-position: center center;
`;