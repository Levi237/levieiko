import React, { Component } from 'react';
import styled from 'styled-components';
export default class About extends Component {
    render(){
        return(

            <AboutContent>
              <div>
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
                professional upgrade, contact me directly by phone or email.
              </p>
              <section>
                <img src="icons/github.png" alt="github link"/>
                <img src="icons/linkedin.png" alt="linkedin link"/>
                <img src="icons/instagram.png" alt="instagram link"/>
                <img src="icons/phone.png" alt="phone link"/>
                <img src="icons/email.png" alt="email link"/>
              </section>
            </div>
            </AboutContent>

        )
    }
}

const AboutContent = styled.div`
  font-size: 14px;
  position: relative;
  z-index: 10;
  margin-left: 5%;  
  display: inline-block;
  width: 50%;
  max-width: 50%;
  vertical-align: top;

  div {
    background-color: rgba(250,250,250,.8);
    padding: 5% 0;
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
`;
