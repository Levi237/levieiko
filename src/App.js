import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import About from './components/About';
import Skills from './components/Skills';


export default class App extends Component {
  render (){
    return (
      <AppContainer>
        <HeaderImage>
        </HeaderImage>
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

        </BodyContainer>
      </AppContainer>
    );
  }
}
const tabletBreakpoint = "900px";



const BodyContainer = styled.div`
  overflow-y: scroll;
  border: 1px solid gray;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(3rem);
  scroll-snap-type: y mandatory;
  height: 100vh;
`;
const HeaderBar = styled.div`
scroll-snap-align: start;
  color: #fff;
  position: relative;
  height: 100vh;
  h1 {
    padding: 10px;
    font-size: 46px;
  }
  section {
    position: absolute;
    right: 10px;
    text-align: right;
    margin-top: -40px;
  }
  img {
    display: block;
    margin: 30vh auto;

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
`;