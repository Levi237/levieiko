import React, { Component } from 'react';
import styled from 'styled-components';
export default class AboutPage extends Component {
    render(){
      
      const { toggleEmailSignup } = this.props
        return(
          <AboutContainer>
            <Container>
              <div>
                <h2>
                  About Me:
                </h2>
                <p><b>Who am I?</b>  Web developer, LEGO enthusaist, 
                  camping guru & photographer of random things. 
                  I have the eye of an artist and the mind of an engineer.</p>
                <p>
                  <b>What I do:</b> I help businesses enhance their online presence. 
                  Stores, blogs, email automations, photoshop, I can build/upgrade 
                  your website for that extra digital edge.
                </p>
                <p>
                  If you have a project you want to come to life, or an existing page 
                  that needs an upgrade or email marketing assitance, contact me 
                  directly by phone or email.
                </p>
                <section>
                  <a href="https://github.com/Levi237"><img src="icons/github.png" alt="github link"/></a>
                  <a href="https://www.linkedin.com/in/leviwinans"><img src="icons/linkedin.png" alt="linkedin link"/></a>
                  <a href="https://www.instagram.com/levi_eiko/"><img src="icons/instagram.png" alt="instagram link"/></a>
                  <span onClick={(e) => {toggleEmailSignup(e)}}><img src="icons/email.png" alt="email form"/></span>
                </section>
              </div>
            </Container>
          </AboutContainer>
        )
    }
}

const Container = styled.div`
  font-size: 14px;
  position: relative;
  z-index: 10;
  margin-left: 5%;  
  display: inline-block;
  width: 50%;
  max-width: 50%;
  vertical-align: top;
  color: black;

  div {
    background-color: rgba(250,250,250,.8);
    padding: 30px 0;
  }
  h2 {
    margin: 0 10%;
  }
  p {
    margin: 5% 15%;
  }
  section {
    text-align: center;
    img {
      width: 15%;
      max-width: 40px;
      margin: 2.5%;
    }
  }
  @media screen and (max-width: 900px) {
    width: 80%;
    max-width: 80%;
  }
`;
const AboutContainer = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 10vh;

  background-attachment: fixed;
  background-color: #fff;
  background-image: url(about.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 60%;

  position: relative;
  scroll-snap-align: start;

@media screen and (max-width: 900px) {
    background-size: cover!important;
    background-position: 70% center;

    // padding-top: 5vh;
    height: 100vh;
}
`;