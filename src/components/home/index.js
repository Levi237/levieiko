import React, { Component } from 'react';
import styled               from 'styled-components';
import { NavLink }          from 'react-router-dom';
import * as routes          from '../../constants/routes';

import MailChimpBanner      from '../MailChimpBanner';
import WireframeBanner      from '../WireframeBanner';
import InfoBanner           from '../InfoBanner';
import Footer               from '../Footer';

import { ReactComponent as LogoSVG } from '../../svg/brand/logo.svg';

export default class HomePage extends Component {
  render(){

    const { pageStyle, btnScroll } = this.props

    return(
      <HomeWrapper>
        <HomeHeroWrapper>
          <NavLink to={routes.PORT}>
            <LogoSVG className="" style={{fill: pageStyle.fill, display: pageStyle.display}}/>
          </NavLink>
          <div id="down-arrow-container" onClick={() => btnScroll()}>
            <div id="down-arrow"></div>
          </div>
        </HomeHeroWrapper>
          <HomeSecondNav id="scroll-to">
            <h1>LEVIEIKO.COM</h1>
          </HomeSecondNav>
        <HomeBodyWrapper>          
          <InfoBanner/>
          <WireframeBanner/>
          <MailChimpBanner/>
          <Footer/>
        </HomeBodyWrapper>
      </HomeWrapper>
    );
  };
}

const HomeWrapper = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;
const HomeSecondNav = styled.nav`
  height: calc(50px + 5vw);
  z-index: 2;
  background-color: var(--darkblue);
  -webkit-scroll-snap-align: start;
  -moz-scroll-snap-align: start;
  -ms-scroll-snap-align: start;
  scroll-snap-align: start;
  > h1 {
    margin: calc(5vw + 2px)!important;
    display: inline-block;
    font-size: 32px;
    line-height: 100%;
  }
  @media screen and (min-width: 945px) {
    height: 112px;
    > h1 {
      margin: 40px!important;
    }
  }
`;

const HomeHeroWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  -webkit-scroll-snap-align: start;
  -moz-scroll-snap-align: start;
  -ms-scroll-snap-align: start;
  scroll-snap-align: start;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  overflow: scroll;
  > a {
    height: 150px!important;
    width: 150px!important;
  } 
`;

const HomeBodyWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 5vw - 50px);
  background-color: #fff;
  overflow: scroll;
  padding-top: 20px;
  scroll-snap-type: y mandatory;
  > h1 {
    color: var(--darkblue);
    font-size: 32px;
  }
  > section {
    width: 100%;
  }
  @media screen and (min-width: 945px) {
    height: calc(100vh - 112px);
  }
`;