import React                            from 'react';
import styled                           from 'styled-components';
import { NavLink }                      from 'react-router-dom';
import * as routes                      from '../../constants/routes';

import { ReactComponent as Mail }       from '../../svg/icons/iconfinder_mail.svg';
import { ReactComponent as Instagram }  from '../../svg/icons/iconfinder_instagram.svg';
import { ReactComponent as Linkedin }   from '../../svg/icons/iconfinder_linkedin.svg';
import { ReactComponent as Github }     from '../../svg/icons/iconfinder_github.svg';


const FAQ = () => { 
  return(
    <Container>
        <h1 className="titleDecoration">FAQ</h1>
        <div>
          <section>
            <h2>Mobile-first website OR an APP?</h2>
            <p>
              It really depends on the complexity.  Apps sound glamorous but there are a few things to consider.  Apps are only intended for mobile and tablets.  They need to be downloaded and take up space on peoples phones.  Most businesses can create the same experience with a mobile-first designed website with added versatility.
            </p>
          </section>
          <section>
            <h2>How much does a website cost?</h2>
            <p>Certain expenses vary, like hosting, domain name, SSL, email, thid party integrations and generally have monthly or annual expenses.
            A s
            mall business website can run anywere from $500 for a single page portfolio to $10,000 high-end eCommerce boutique.  You can always start small and build up.  The sooner you start generating revenue the sooner you can invest in yourself!
            </p>
          </section>
          <section>
            <h2>What kind of web developer is Levi?</h2>
            <p>
              I am a freelance full-stack web developer with email marketing and graphic design skills.  AKA a “ one man band.”  I can code your website or customize a third party hosting service like Shopify, WordPress, etc, and integrate third party technologies.  All with style 😉
            </p>
          </section>
          <section>
            <h2>What are alternatives to hiring a freelancer?</h2>
            <p>
              There are agencies that work in teams that can provide more services like copy writing, data analysis, surveys, etc.  Or you can DIY with WIX, SquareSpace, Weebly, etc... just make sure to uncheck those additional services boxes that may incur future charges.  
            </p>
          </section>
          <section>
            <h2>What if I have a great product or brand but I can’t afford the price?</h2>
            <p>
              There are certain times when my gut tells me ‘this client is a good investment’ and I’m usually right.  If you have someting started and see real potential in upping your game, I am down to chat.
            </p>
          </section>
          <section>
            <h2>What is the process like?</h2>
            <ul>
              <li>consult & make a plan</li>
              <li>set up & connect accounts</li>
              <li>create content & design</li>
              <li>develop website, test each step</li>
              <li>test function & refine</li>
              <li>LAUNCH!</li>
            </ul>
          </section>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://github.com/Levi237">
            <Github className="svg-about-link"/>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leviwinans">
            <Linkedin className="svg-about-link"/>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/levi_eiko/">
            <Instagram className="svg-about-link"/>
          </a>
          <NavLink to={routes.MAIL}>
            <Mail className="svg-about-link"/>
          </NavLink>
        </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(19,17,17,.8);
  padding: 80px 0;
  margin: 0 auto!important;

  @media screen and (max-width: 745px){
      padding-top: 60px;
      > h1 {
          padding: 20px;
      }
  }
`;

export default FAQ;