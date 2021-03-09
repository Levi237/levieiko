import React, { Component }           from 'react';
import { Switch, Route, NavLink }     from 'react-router-dom';
import styled                         from 'styled-components';

import { ReactComponent as LogoSVG }  from './svg/logo.svg';

import * as routes                    from './constants/routes';
import ModalWindow                    from './components/Modal';
import NavMenu                        from './components/nav/NavMenu';
import NavHamburger                   from './components/nav/NavHamburger';

import HomePage                       from './components/home/HomePage';
import AboutPage                      from './components/about/AboutPage';
import ContactPage                    from './components/contact/ContactPage';
import EmailConfirmation              from './components/contact/EmailConfirmation';
import PortfolioPage                  from './components/portfolio/PortfolioPage';

export default class App extends Component {
  state = {
    modalType: '',
    pageStyle: {
      home: {
        title: '',
        color: '#fff',
        fill: 'url(#skyGradient)',
        displayLogo: 'none',
      },
      about: {
        title: '',
        color: '#181717',
        displayLogo: 'none',
      },
      portfolio: {
        title: 'portfolio',
        color: '#fff',
        displayLogo: 'inline-block',
        fill: '#fff',
      },
      mail: {
        title: 'contact',
        color: '#fff',
        fill: '#fff',
        displayLogo: 'inline-block',
      },
      root: {
        title: '',
        color: '#fff',
        displayLogo: 'none',
      }
    }
  };

  toggleModal = (e) => {
    const toggle = document.getElementById('modal');
    toggle.classList.toggle('active');
    toggle.classList.toggle('inactive');
    this.setState({
      modalType: e.currentTarget.value
    });
  };

  toggleMenu = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };

  render (){

    const { modalType, pageStyle } = this.state

    return (
      <AppContainer>
        {/* <HomePage pageStyle={pageStyle.home}/> */}
        <LogoSVG className="" style={{width: '0', height: '0', position: 'absolute'}}/>

        <NavMenu toggleMenu={this.toggleMenu}/>
        <ModalWindow contactType={modalType} toggleModal={this.toggleModal}/>

        <Switch>
          <Route path={routes.HOME} exact render={() => <HeroImageDivAnimation/>}/>
          <Route path={routes.PORT} exact render={() => <HeroImageDiv/>}/>
          <Route path={routes.MAIL} exact render={() => <GoblinValleyImageAnimation/>}/>
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
              <Route path={routes.CNFM} exact render={() => <EmailConfirmation/> }/>
              <Route path={routes.MAIL} exact render={() => <ContactPage contactType={modalType}/> }/>
              <Route path={routes.PORT} exact render={() => <PortfolioPage/> }/>
              <Route path={routes.INFO} exact render={() => <AboutPage/> }/>
              <Route path={routes.HOME} exact render={() => <HomePage pageStyle={pageStyle.home}/> }/>
              <Route path={routes.ROOT} render={() => <HomePage pageStyle={pageStyle.home}/> }/>
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
  a {
    height: 150px;
    width: 150px;
    display: inline-block;
  }
  svg {
    height: 150px;
    width: 150px;
  }
`;