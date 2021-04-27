import React, { Component }   from 'react';
import styled                 from 'styled-components';

export default class MailChimpBanner extends Component {
  render(){
    return(
      <MailChimpBannerWrapper>
        <h1>Email Marketing Solutions</h1>
        <div>
          <h3>How MailChimp can help you reach out to more people with less effort.</h3>
          <div>
          <section class="mobile">
            <img src="/mailchimp-automation.png"/>
          </section>
            <section>
              <ul>
                <li>
                  Affordable and easy
                </li>
                <li>
                  Email automations
                </li>
                <li>
                  Engage with your audience
                </li>
                <li>
                  Get in that Inbox, not SPAM
                </li>
                <li>
                  Promote sales &amp; launches
                </li>
                <li>
                  Track opens and clicks
                </li>
                <li>
                  Segment and tag contacts
                </li>
              </ul>
            </section>
            <section class="desktop">
              <img src="/mailchimp-automation.png"/>
            </section>
          </div>
        </div>
      </MailChimpBannerWrapper>
    );
  };
}

const MailChimpBannerWrapper = styled.section`
  -webkit-scroll-snap-align: start;
  -moz-scroll-snap-align: start;
  -ms-scroll-snap-align: start;
  scroll-snap-align: start;
  position: relative;
  width: 100vw;
  max-width: 100vw;
  width: 100%;
  height: auto;
  padding-bottom: 80px;
  padding-top: 10px;
  background-color: var(--lightgrey);
  > h1 {
    font-size: 7.8vw;
    color: white;
    margin-top: 60px!important;
    margin-bottom: -3.3vw!important;
    text-shadow: 2px 2px 2px rgba(0,0,0,.5);
  }
  > div {
    background-color: var(--blue);
    width: 90%;
    max-width: 900px;
    margin: 0 auto;
    > h3 {
      text-align: center;
      font-size: 4.2vw;
      padding: 10vw 5vw 0;
      font-weight: 500;
    }
    > div {
      padding: 0 0 20px;
      > section {
        display: block;
        display: flex;
        align-self: center;
        justify-content: center;
        &:first-of-type {
          width: 100%;
        }
        &:last-of-type {
          width: 100%;
        }
        > img {
          width: 90%;
          margin: 5%;
        }
        > ul {
          margin-left: 8%:
          display: inline-block;
          vertical-align: middle;
          font-size: 3.6vw;
          color: white;
          li {
            padding-bottom: 10px;
          }
        }
      }
    }
  }
  .mobile {
   display: inline-block; 
  }
  .desktop {
    display: none;
  }
  @media screen and (min-width: 640px) {

  }
  @media screen and (min-width: 840px) {
    .mobile {
      display: none; 
     }
     .desktop {
       display: inline-block;
     }
    -webkit-scroll-snap-align: start;
    -moz-scroll-snap-align: start;
    -ms-scroll-snap-align: start;
    scroll-snap-align: start;
    position: relative;
    width: 100vw;
    max-width: 100vw;
    height: 100%;
    padding-top: 10px;
    background-color: var(--lightgrey);
    > h1 {
      font-size: 32px;
      color: white;
      margin-top: 80px!important;
      margin-bottom: -15px!important;
      text-shadow: 2px 2px 2px rgba(0,0,0,.5);
    }
    > div {
      background-color: var(--blue);
      width: 90%;
      max-width: 900px;
      margin: 0 auto;
      > h3 {
        text-align: center;
        font-size: 20px;
        padding: 40px 0 0;
        font-weight: 500;
      }
      > div {
        display: flex;
        align-self: center;
        justify-content: center;
        padding: 0 0 20px;
        > section {
          display: inline-block;
          display: flex;
          align-self: center;
          justify-content: center;
          &:first-of-type {
            width: 37%;
          }
          &:last-of-type {
            width: 55%;
          }
          > img {
            width: 90%;
            margin: 5%;
          }
          > ul {
            margin-left: 8%:
            display: inline-block;
            vertical-align: middle;
            font-size: 18px;
            color: white;
            li {
              padding-bottom: 10px;
            }
          }
        }
      }
    }
  }
`;