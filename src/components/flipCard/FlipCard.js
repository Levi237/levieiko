import React  from 'react';
import styled from 'styled-components';


const FlipCards =({projects})=> {
    const projectSpread = projects.map((p, key) => {
        return(
            <CardContainer key={key}>
                <a href={p.link}>
                <FlipCard>
                    <FlipCardInner>
                        <FlipCardFront>
                            <img src={p.image} alt="front"/>
                        </FlipCardFront>
                        <FlipCardBack>
                            <h1>{p.title}</h1> 
                            <p>{p.lineOne}</p> 
                            <p>{p.lineTwo}</p>
                        </FlipCardBack>
                    </FlipCardInner>
                </FlipCard>
                </a>
            </CardContainer>
        )
            
    })
    return(
            <>
                {projectSpread}
            </>
        );
};

const CardContainer = styled.div`
 
display: inline-block;
`;

const FlipCard = styled.div`
    background-color: transparent;
    width: 20vw!important;
    height: 30vw!important;
    perspective: 1000px;
    &:hover > div:first-of-type {
        transform: rotateY(180deg);
    }
    img {
        width: 20vw!important;
        height: 30vw!important;
    }
  `;
  
  const FlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;

  `;
  

  
  const FlipCardGen = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  `;
  
  const FlipCardFront = styled(FlipCardGen)`
    background-color: #bbb;
    color: black;
  `;
  
  const FlipCardBack = styled(FlipCardGen)`
    background-color:transparent!important;
    color: #fff;
    transform: rotateY(180deg);
  `;
export default FlipCards;