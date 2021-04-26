import React       from 'react';
import styled      from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';

import Footer      from '../Footer';

import { ReactComponent as LogoSVG } from '../../svg/brand/logo.svg';

const HomePage = ({pageStyle}) => {
  return(
    <HomeHeroWrapper>
      <NavLink to={routes.PORT}>
        <LogoSVG className="" style={{fill: pageStyle.fill, display: pageStyle.display}}/>
      </NavLink>
      <HomeBodyWrapper>
        <header><h1>LEVIEIKO.COM</h1></header>
        <InfoBox>
          <section>
            <div></div>
            <img src="/pranawellnessworks-mobile-small.png"/>
            <section></section>
          </section>
          <section>
            <div>
              <h1>MOBILE-FIRST</h1>
              <h3>You actually <b>don't</b> need an app for that.</h3>
              <p>
                For most people their primary device is their cell phone.
                With a mobile-first website you can create that same app experience 
                without forcing users to download more stuff onto their phones or 
                switching between iPhone and Android devices.
              </p>
              <p>
                Welcome to the future!
              </p>
            </div>
          </section>
          <div></div>
        </InfoBox>
        <Footer/>
      </HomeBodyWrapper>
    </HomeHeroWrapper>
  );
};

const HomeHeroWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  a {
    height: 150px!important;
    width: 150px!important;
  } 
`;
const HomeBodyWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  top: 100vh;
  overflow: scroll;
  > header {
    height: 80px;
    background-color: var(--darkblue);
    > h1 {
      margin: 24px!important;
      display: inline-block;
      font-size: 32px;
      line-height: 100%;
    }
  }
  > h1 {
    color: var(--darkblue);
    font-size: 32px;
  }
  > section {
    width: 100%;
  }
`;
const InfoBox = styled.section`
  position: relative;
  max-width: 100vw;
  height: 100%;
  margin: 0 auto;

  > div {
    position: absolute;
    width: 80vw;
    height: 80vw;
    border: 1px solid black;
    z-index: 0;
    top: 75vw;
    left: calc(10vw - 1px);
  }

  > section {
    position: relative;
    height: 90vw;
    width: 90vw;
    border: none;
    font-size: 0;
    z-index: 1;
    color: var(--darkgrey);

    &:first-of-type {
      margin: 5vw 0 0 5vw;

      > div {
        height: 85%;
        width: 85%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: url(https://pranawellnessworks.com/home-meet.png);
        background-size: cover;
      }
      > img {
        width: 36%;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    &:last-of-type {
      margin: 0 0 5vw 5vw;
      display: flex;
      align-items: start;
      justify-content: center;

      > div {
        width: 100%;
        display: inline-block;
        vertical-align: middle;
        padding: 0% 15% 0% 10%;
      }
      h1 {
        color: var(--black);
        font-size: 8vw;
        margin: 0% 0% 5%!important;
        text-align: left;
      }
      h3 {
        font-size: 4vw;
        font-weight: 500;
        font-style: italic;
        margin: 0!important;
      }
      p {
        font-size: 3.5vw;
        &:last-of-type {
          margin-bottom: 0!important;
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (min-width: 640px) {
    max-width: 1000px;
    height: 50vw;
    max-height: 500px;
    margin: 0 auto;
    font-size: 0; 
    display: flex;
    align-items: center;  
    justify-content: center; 
    > div {
      position: absolute;
      width: 70vw;
      height: 35vw;
      max-width: 700px;
      max-height: 350px;
      border: 1px solid black;
      z-index: 0;
      
      top: 7.5vw;
      left: 15vw;
      // position: absolute;
      // width: 80vw;
      // height: 120vw;
      // max-width: 700px;
      // max-height: 350px;
      // border: 1px solid black;
      // z-index: 0;
      // top: 75vw;
      // left: calc(10vw - 1px);
    }
    > section {
      position: relative;
      height: 80%;
      width: 40%;
      border: none;
      font-size: 0;
      z-index: 1;
      color: var(--darkgrey);
      margin: 0!important;
      &:last-of-type {
        
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          width: 100%;
          display: inline-block;
          vertical-align: middle;
          padding: 0% 15% 0% 10%;
        }
        h1 {
          color: var(--black);
          font-size: 4vw;
          margin: 0% 0% 5%!important;
          text-align: left;
        }
        h3 {
          font-size: 1.8vw;
        }
        p {
          font-size: 1.5vw;
          &:last-of-type {
            margin-bottom: 0!important;
          }
        }
      }
    }
  }
  @media screen and (min-width: 1000px) {
    > section {
      position: relative;
      height: 80%;
      width: 40%;
      border: none;
      font-size: 0;
      z-index: 1;
      color: var(--darkgrey);

      &:last-of-type {
        display: flex;
        align-items: center;
        justify-content: center;
        > div {
          width: 100%;
          display: inline-block;
          vertical-align: middle;
          padding: 0% 15% 0% 10%;
        }
        h1 {
          color: var(--black);
          font-size: 32px;
          margin: 0% 0% 5%!important;
          text-align: left;
        }
        h3 {
          font-size: 17px;
          font-weight: 500;
          font-style: italic;
      
          margin: 0!important;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
`;
export default HomePage;

