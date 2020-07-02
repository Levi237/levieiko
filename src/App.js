import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import About from './components/About';
import Skills from './components/Skills';
import Clients from './components/Clients';


export default class App extends Component {
  render (){
    return (
      <AppContainer>
        <HeaderImage/>

        <BodyContainer class="container">
          
          <HeaderBar class="child">
            <h1>Levi Eiko Winans</h1>
            <section>
              <span>+ 646 206 8777</span>
              <br/>
              <span>LeviEiko@gmail.com</span>
            </section>
            <img src="logo.png" alt="levieiko.com"/>
          </HeaderBar>

          <AboutContainer class="child">
            <About/>
            <br/><br/><br/><br/>

          </AboutContainer>
            <Skills/>
<Clients/>
        </BodyContainer>
      </AppContainer>
    );
  }
}

const BodyContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
`;
const HeaderBar = styled.div`
  color: #fff;

  height: 100vh;
  scroll-snap-align: start;
  position: relative;

  h1 {
    font-size: 46px;
    padding: 10px;
  }
  section {
    text-align: right;

    margin-top: -40px;
    position: absolute;
    right: 10px;
  }
  img {
    display: block;
    margin: 30vh auto;
  }
  @media screen and (max-width: 900px){
    h1 {
      text-align: center;
    }
    section {
      font-size: 5vw;
      font-weight: bold;
      background-image: linear-gradient(transparent, rgba(0,0,0,.5));
      padding: 5%;
      width: 100%;
      bottom: 0;
      right: 0;
    }
  }
  `;
const HeaderImage = styled.div`
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
const AppContainer = styled.div`
  font-family: Helvetica;
  * {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 100%;
  }
`;
const AboutContainer = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 10vh;
  background-color: #fff;
  background-image: url(about.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-size: 60%;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  scroll-snap-align: start;
@media screen and (max-width: 900px) {
    background-size: cover!important;
    background-size: auto;
    background-position: 70% center;
    padding-top: 5vh;
    height: 95vh;
}
`;