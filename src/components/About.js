import React, { Component } from 'react';
import styled from 'styled-components';
export default class About extends Component {
    render(){
        return(

            <Container>
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
                I created my first page when I was 15 to honor my favorite manga series 
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
                <a href="https://github.com/Levi237"><img src="icons/github.png" alt="github link"/></a>
                <a href="https://www.linkedin.com/in/leviwinans"><img src="icons/linkedin.png" alt="linkedin link"/></a>
                <a href="https://www.instagram.com/levi_eiko/"><img src="icons/instagram.png" alt="instagram link"/></a>
                <a href="mailto:levieiko@gmail.com"><img src="icons/email.png" alt="email link"/></a>
              </section>
            </div>
            </Container>

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
  @media screen and (max-width: 900px) {
    width: 80%;
    max-width: 80%;
  }
`;
