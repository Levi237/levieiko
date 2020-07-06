import React, { Component }  from 'react';
import styled from 'styled-components';

import FlipCards from './flipCard/FlipCard'

export default class Projects extends Component {
    state = {
        projects: [{
            title: "PokeGen",
            image: "./projects/pokegen.png",
            link: "https://pokegen.herokuapp.com/",
            lineOne: "Build your own Pokemon Card MEME.",
            lineTwo:"Login, create, and share."
        },{
            title: "Hi Sierra!",
            image: "./projects/hi-sierra.png",
            link: "https://parkintel.herokuapp.com/home",
            lineOne: "Learn more about the National Parks.",
            lineTwo:"Track unexpected closures."
        },{
            title: "LA-HOP",
            image: "./projects/la-hop.png",
            link: "https://lahsa-la-hopv2.herokuapp.com/request",
            lineOne: "Tools for the public to help",
            lineTwo: "report homeless needs."
        },{
            title: "BlackJack",
            image: "./projects/blackjack.png",
            link: "https://levi237.github.io/blackjack-reup/",
            lineOne: "Bid, Hit, Double Down, Call.",
            lineTwo: "Black Jack circa 1990."
        }]
    }

    render(){
const { projects } = this.state;
    
    return(
        <Container>
            <h1>Projects</h1>
            <FlipCards projects={projects} />
        </Container>
    );
};
}

const Container = styled.div`
    h1 {
        color: #000;
        text-shadow: 0px 0px 3px rgba(255,255,255,0.9);
        padding: 20px 0;
    }
    h3 {
        text-align: center;
        padding-bottom: 10px;
        color: rgba(255,255,255,0.9);

    }
    > div {
        display: inline-block;
        width: 20%;
        margin: 2.5%;
    }
    // img {
    //     width: 100%;
    // }
    section {
        color: #fff;
        text-align: center;
        font-size: 12px;
    }
    @media screen and (max-width: 1000px) {
        section {
            font-size: 10px;
        }
    }
    @media screen and (max-width: 860px) {
        div {
            width: 23%;
            margin: 1%;
        }
    }
    @media screen and (max-width: 760px) {
        section {
            font-size: 9px;
        }
    }
    @media screen and (max-width: 680px) {
        div {
            width: 40vw;
            margin: 5vw;
        }
        section {
            font-size: 2.25vw;
        } 
    }
`;

// export default Projects;