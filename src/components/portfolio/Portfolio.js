import React, { Component } from 'react';

import Skills               from './Skills';
import Clients              from './Clients';
import ProjectsFlip         from './ProjectsFlip';
import ProjectsMobile       from './ProjectsMobile';

export default class Portfolio extends Component {
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
        return (
            <div style={{backgroundColor: "rgba(19,17,17,.8)",paddingTop: "80px"}}>
                <h1>PORTFOLIO</h1>
                <br/><br/><br/>
                <Skills/>
                <Clients/>
                <ProjectsFlip/><ProjectsMobile/>
            </div>
        );
    };
};

