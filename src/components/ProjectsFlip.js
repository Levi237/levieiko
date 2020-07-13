import React, { Component }  from 'react';
import styled from 'styled-components';

import FlipCards from './recycle/FlipCards';

export default class ProjectsFlip extends Component {
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
                <FlipCards projects={projects} />
            </Container>
        );
    };
};

const Container = styled.div`
    h3 {
        text-align: center;
        padding-bottom: 10px;
        color: rgba(255,255,255,0.9);
    }
    @media screen and (max-width: 760px) {
        display: none;
    }
`;
