import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

export default class App extends Component {
  render (){
    return (
      <AppContainer>
        <HeaderImage>
        </HeaderImage>
        <BodyContainer>
          <HeaderBar>
            <h1>Levi Eiko Winans</h1>
            <section>
              <span>+ 646 206 8777</span>
              <br/>
              <span>LeviEiko@gmail.com</span>
            </section>
          </HeaderBar>
          <AboutContainer>
            <AboutImage>
              <img src="about.png" alt="about"/>
            </AboutImage>
            <AboutText>
            <h2>
              About Me:
            </h2>
            <p>
              I have a creative nature with the mind of an engineer. If you are looking 
              for someone who learns quick on the job, works well in teams or solo, 
              can think outside the box and adapt when necessary, I'm your person. 
              I enjoy working with React, CSS, & Photoshop, and everything that goes into 
              the experience of what makes a website mean something.
            </p>
            <p>
              I built my first page when I was 15 to honor my favorite manga series 
              "Inu Yasha". In college I built sites for my DJ and photographer friends, 
              including a very popular LA party website called "lamadreiswatching.com" in 2007. 
              I always thought of web development as a hobby, like building intricate city-scapes 
              with LEGOS. Since then I have studied code in depth and become a full-fledged developer, and I <i>love</i> it!
            </p>
            <p>
              If you have a project you want to come to life, or an existing page that needs a 
              professional upgrade, feel free to reach out to me directly by phone or email.
            </p>
            </AboutText>
          </AboutContainer>
        </BodyContainer>
      </AppContainer>
    );
  }
}
const AboutBox = styled.div`
  display: inline-block;
  width: 50%;
  max-width: 50%;
`;
const AboutImage = styled(AboutBox)`
  img {
    width: 100%;
  }
`;
const AboutText = styled(AboutBox)`
background-color: rgba(255,255,255,.6);
  p {
    margin: 5% 0;
  }
`;
const AboutContainer = styled.div`
  background-color: #fff;
  width: 100%;
  
  position: absolute;
  top: 100vh;
`;
const BodyContainer = styled.div`

`;
const HeaderBar = styled.div`
  color: #fff;
  position: relative;
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
  `;
const HeaderImage = styled.div`
  height: 100vh;
  width: 100vw;

  background-image: url(background/header-hero.png);
  background-size: cover;
  background-position: left;

  position: fixed;
  z-index: -1;
`;
const AppContainer = styled.div`
  font-family: Helvetica;
  * {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 100%;
  }
`;
