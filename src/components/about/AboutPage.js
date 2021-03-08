import React                            from 'react';
import styled                           from 'styled-components';
import { NavLink }                      from 'react-router-dom';
import * as routes                      from '../../constants/routes';

import { ReactComponent as Mail }       from '../../svg/iconfinder_mail.svg';
import { ReactComponent as Instagram }  from '../../svg/iconfinder_instagram.svg';
import { ReactComponent as Linkedin }   from '../../svg/iconfinder_linkedin.svg';
import { ReactComponent as Github }     from '../../svg/iconfinder_github.svg';

const AboutPage = () => { 
  return(
    <AboutContainer>
      <Container>
        <div>
          <h2>
            Meet Levi
          </h2>
          <p>
            <b>Who am I?</b>
            &emsp;A web developer, LEGO enthusaist, camping guru & photographer 
            of random things... with a green thumb. I'd like to think I have the 
            eye of an artist & the mind of an engineer, and my 
            <NavLink to={routes.PORT}>clients</NavLink> 
            seem to agree, so that's nice! 🤗
          </p>
          <p>
            <b>What I do:</b>
            &emsp;I help businesses enhance their online presence. 
            Stores, blogs, email automations, photoshop, <u>yes</u>. 
            I can build/upgrade your website for that extra digital edge.
          </p>
          <p>
            If you have a project you want to come to life, an existing 
            page that needs an upgrade or email marketing assitance, 
            <NavLink to={routes.MAIL}>contact</NavLink> 
            me by clicking the envelope below!
          </p>
          <section>
            <a target="_blank" href="https://github.com/Levi237">
              <Github className="svg-link"/>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/leviwinans">
              <Linkedin className="svg-link"/>
            </a>
            <a target="_blank" href="https://www.instagram.com/levi_eiko/">
              <Instagram className="svg-link"/>
            </a>
            <NavLink to={routes.MAIL}>
              <Mail className="svg-link"/>
            </NavLink>
          </section>
        </div>
      </Container>
    </AboutContainer>
  );
};

const Container = styled.div`
  color: var(--black);
  font-size: 14px;
  position: relative;
  z-index: 10;
  margin-left: 5%;  
  display: inline-block;
  width: 50%;
  max-width: 50%;
  vertical-align: top;
  svg {
    width: 40px;
    height: 40px;
    margin: 2.5%;
  }
  a {
    color: var(--darkblue);
    transition: .3s ease;
    &:hover {
      color: var(--blue);
      > svg * {
        fill: var(--blue)!important;
      }
    }
  }
  div {
    background-color: rgba(250,250,250,.8);
    padding: 30px 0;
  }
  h2 {
    margin: 0 10%;
    font-size: 36px;
    font-family: "Big Shoulders Stencil Text";
    text-align: center;
  }
  p {
    margin: 15px 15%;
    font-size: 15px;
    font-weight: 100;
    line-height: 160%;
    b {
      font-weight: 500;
    }
  }
  section {
    text-align: center;
    img {
      width: 15%;
      max-width: 40px;
      margin: 2.5%;
    }
    > span {
      width: 15%;
      max-height: 40px;
      max-width: 40px;
      margin: 2.5%;
      transition: .3s ease;
      &:hover {
        cursor: pointer;
      }
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
  overflow: scroll;

  background-attachment: fixed;
  background-color: #fff;
  background-image: url(about.png);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  // scroll-snap-align: start;

  @media screen and (max-width: 900px) {
      height: 100vh;
      background-size: cover!important;
      background-position: 70% center;
  }
`;

export default AboutPage;