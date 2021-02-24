import React from 'react';
import styled from 'styled-components';

const Skills =({skills})=> {
  const skillsList = skills.map(skill => {
    return <>{skill}<span></span></>
  })
  return(
      <Container>
          <h1>Skills</h1>
          <br/>
          <section>
            {skillsList}
          </section>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    padding-top: 20px;
    margin-bottom: 30px;
  }
  section {
    text-align: center;
    padding: 2% 0% 40px;
  }
  br {
    display: none;
  }
  section {
    >span::before {
      content: ' | ';
    }
    >span:nth-of-type(5)::before,
    >span:nth-of-type(9)::before,
    >span:last-of-type::before   {
      content: '';
      display: block;
    }
  }
  @media screen and (max-width: 980px){
    section {
      margin: 0 auto;
      br {
        display: block;
      }
    }
  }
  @media screen and (max-width: 400px){
  }
`;

export default Skills; 