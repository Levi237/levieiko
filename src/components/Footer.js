import React  from 'react';
import styled from 'styled-components';

import { NavLink }                      from 'react-router-dom';
import * as routes                      from './../constants/routes';

import { ReactComponent as Mail }       from './../svg/icons/iconfinder_mail.svg';
import { ReactComponent as Instagram }  from './../svg/icons/iconfinder_instagram.svg';
import { ReactComponent as Linkedin }   from './../svg/icons/iconfinder_linkedin.svg';
import { ReactComponent as Github }     from './../svg/icons/iconfinder_github.svg';

const Footer = () => {
    return(
        <Container>
          <div>

            <section>
              <h2>Quick Links</h2>
              <NavLink to={routes.MAIL}>
                Contact
              </NavLink> 
              <NavLink to={routes.INFO}>
                About
              </NavLink>    
              <NavLink to={routes.PORT}>
                Clients
              </NavLink>   
              <NavLink to={routes.FAQS}>
                FAQ
              </NavLink>             
            </section>

            <section>
              <a target="_blank" rel="noreferrer" href="https://github.com/Levi237">
                <Github className="svg-about-link"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leviwinans">
                <Linkedin className="svg-about-link"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/levi_eiko/">
                <Instagram className="svg-about-link"/>
              </a>
              {/* <NavLink to={routes.MAIL}>
                <Mail className="svg-about-link"/>
              </NavLink> */}
            </section>
            <section>
              Built by LeviEiko.com
            </section>

          </div>
        </Container>
        );
};



const Container = styled.footer`
scroll-snap-align: end;
  margin-top: 120px;
  width: 100vw;
  text-align: center;
  background-color: var(--black);
  h2 {
    margin-bottom: 5px!important;
  }
  > div {
    width: 100vw;
    > section {
      width: calc(42vw - 160px);
      padding: 3vw;
      display: inline-block;
      &:first-of-type {
        text-align: left;
        padding: 3vw;
        vertical-align: top;
      }
      &:nth-of-type(2) {
        width: 320px;
        padding: 6vw 0;
        vertical-align: middle;
      }
      &:last-of-type {
        text-align: right;
        padding: 3vw;
        vertical-align: bottom;
      }
    }
    svg {
      height: 40px;
      width: 40px;
      margin: 15x;
      fill: white;
      &:hover {
        fill: var(--lightgrey);
      }
    }
    a {
      color: #fff;
      padding: 0 10px;
    }
  }
  @media screen and (max-width: 745px){
    > div {
      padding: 20px 0;
      > section {
        width: 90vw;
        padding: 5vw;
        display: block;
        margin: 0 auto;
        &:first-of-type {
          text-align: left;
        }
        &:nth-of-type(2) {
        }
        &:last-of-type {
          text-align: right;
        }
      }
      svg {
        height: 40px;
        width: 40px;
        margin: 10px;
      }
    }
  }
`;

export default Footer;