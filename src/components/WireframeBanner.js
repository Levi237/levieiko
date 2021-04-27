import React, { Component }     from 'react';
import styled      from 'styled-components';

export default class WireframeBanner extends Component {
  render(){
    return(
      <WireframeBannerWrapper>
        <h1>THE BIG PICTURE</h1>
        <p>
          <i>Take it one page at a time, you'd be surprised what can develop.</i> 
        </p>
        <div>
          <img class="desktop" src="/momo-wireframe-desktop.png"/>
          <img class="mobile" src="/momo-wireframe-mobile.png"/>
        </div>
        <a href="https://momomuscle.co" alt="MoMo[Muscle]" target="_blank">MomoMuscle.co 2020</a>
        <br/><br/><br/><br/>
      </WireframeBannerWrapper>
    );
  };
}

const WireframeBannerWrapper = styled.section`
    -webkit-scroll-snap-align: start;
    -moz-scroll-snap-align: start;
    -ms-scroll-snap-align: start;
    scroll-snap-align: start;
    position: relative;
    color: var(--darkgrey);
    width: 100%;
    padding-top: 40px;
    text-align: center;
    > h1 {
      color: var(--darkblue);
      font-size: 32px;
      margin: 0 auto!important;
      padding-top: 40px;
      padding-bottom: 10px;
    }
  > div {
    > img {
      width: 90%;
      margin: 15px 5%;
    }
  }


  > p {
    text-align: center;
    max-width: 1000px;
    margin: 10px 20%;
  }    
  .mobile {
    display: inline-block;
  }
  .desktop {
    display: none;
  }
  @media screen and (min-width: 640px) {
    padding-top: 0;
    .mobile {
      display: none;
    }
    .desktop {
      display: inline-block;
    }
    > div {

    }
  }
  @media screen and (min-width: 1000px) {
 
  }
`;