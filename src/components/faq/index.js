import React                            from 'react';
import styled                           from 'styled-components';

const FAQPage = () => { 
  return(
    <Container>
        <h1 className="titleDecoration">FAQ</h1>
        <div>
          <section>
            <h2>How much does a website cost?</h2>
            <p>
              A small business website can run anywere from $500 for a single page portfolio to $10,000 high-end e-commerce boutique.  
              Most small businesses start between $1,200 informative to $3,000 e-commerce.
              <br/>
              <i>Certain expenses vary, like hosting, domain name, SSL, email, thid party integrations and generally have monthly or annual expenses.</i>
            </p>
          </section>
          {/* <section>
            <h2>Website pricing examples:</h2>
            <ul>
              <li>static single page: $500+</li>
              <li>static multi-page informational: $600 - $2,400+
                <ul>
                  <li><a href="https://LeviEiko.com">LeviEiko.com</a></li>
                  <li><a href="https://pranawellnessworks.com">PranaWellnessWorks.com</a></li>
                  <li><a href="https://AndreaSellsMaui.com">AndreaSellsMaui.com</a></li>
                </ul>
              </li>
              <li>dynmaic: $600 - $2,400+
                <ul>
                  <li><a href="https://LeviEiko.com">LeviEiko.com</a></li>
                  <li><a href="https://pranawellnessworks.com">PranaWellnessWorks.com</a></li>
                  <li><a href="https://AndreaSellsMaui.com">AndreaSellsMaui.com</a></li>
                </ul>
              </li>
              <li>technology / software integrated website: $1,200 - $10,000+</li>
              <li>simple e-commerce store: $2,400 - $7,000
                <ul>
                  <li><a href="https://red5performance.com">Red5Performance.com</a></li>
                </ul>
              </li>
              <li>high-end e-commerce store / high-tech website: $4,000 - $10,000+
                <ul>
                  <li><a href="https://MomoMuscle.co">MomoMuscle.co</a></li>
                </ul>
              </li>
            </ul>
          </section> */}
          <section>
            <h2>Should I code my website or use a builder/generator like Shopify?</h2>
            <p>
              When it comes to legal stuff and e-commerce, I would say why re-invent the wheel?  If you're a small business, let's do it through Shopify or WordPress!
              Sometimes you need to integrate third party technologies.  WordPress could have a plugin that will save you time and money in development.
            </p>
          </section>
          <section>
            <h2>This is a lot to process, where do I start?</h2>
            <p>
              I recommend starting with your minimum viable product (MVP).
              The sooner you start generating revenue the sooner you can invest in yourself!
            </p>
          </section>
          <section>
            <h2>What is a Mobile-first design?</h2>
            <p>
              Essentially we are building a website intended to the best user experience on their mobile device.
              More and more people are using their phones to surf the web.  
              A mobile-first website doesn't have the barrier of a download requirement, giving people more of an opportunity to view your brand.
            </p>
          </section>
          <section>
            <h2>Mobile-first Website -OR- APP?</h2>
            <p>
              It really depends on the complexity.  
              Apps sound glamorous but there are a few things to consider.  
              Apps are limited on which devices you can view them.  
              Apps need to be downloaded and take up space on peoples phones.
              <br/>
              Most businesses can create the same experience with a mobile-first designed website with added versatility.
            </p>
          </section>
          <section>
            <h2>What kind of web developer is Levi?</h2>
            <p>
              I am a freelance full-stack <b>web developer</b> with <b>email marketing</b> and <b>graphic design</b> skills.  
              AKA a “ one man band.”  
              I can code your website or customize a third party hosting service like Shopify, WordPress, etc.  
              All with style 😉
            </p>
          </section>
          <section>
            <h2>What are alternatives to hiring a freelancer?</h2>
            <p>
              There are agencies that work in teams that can provide more services like copy writing, data analysis, surveys, etc.  
              Or you can DIY with WIX, SquareSpace, Weebly, etc... make sure to uncheck those additional services boxes that may incur future charges.
            </p>
          </section>
          <section>
            <h2>What if I have a great product or brand but I can’t afford the price?</h2>
            <p>
              There are certain times when my gut tells me ‘this project is a good investment.’  
              I offer a complimentary consultation to discuss how I can assist you with your business plan and online presence.
            </p>
          </section>
          <section>
            <h2>What is the process like?</h2>
            <ul>
              <li>consult & make a plan</li>
              <li>set up & connect accounts</li>
              <li>create content & design</li>
              <li>develop website, test each step</li>
              <li>test function & refine style</li>
              <li>LAUNCH!</li>
            </ul>
          </section>
        </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  color: #181717;
  padding: 80px 0;
  margin: 0 auto!important;
  > div {
    margin: 60px auto;
    width: 65%;
    max-width: 800px;
    section {
      margin-bottom: 60px;
    }
    ul {
      line-height: 150%;
      margin-block-start: 1em;
      margin-block-end: 1em;
      ul {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 745px){
      padding-top: 60px;  
      > h1 {
          padding: 20px;
      }
      h2 {
        font-size: 22px;
      }
  }
`;

export default FAQPage;