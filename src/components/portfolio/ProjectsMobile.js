// FOR MOBILE DISPLAY OF PERSONAL PROJECTS
import React, { Component }     from 'react';
import styled                   from 'styled-components';

export default class ProjectsMobile extends Component {
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

    const mapped = this.state.projects.map((x, k) => {
        return (
            <div key={k}>
                <h3>{x.title}</h3>
                <a 
                    alt={x.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={x.link}
                    >
                    <img src={x.image}/>
                </a>
                <section>
                    {x.lineOne}
                    <br/>
                    {x.lineTwo}
                </section>
            </div>
        )
    })
        return(
            <Container>
                    <br/><br/><br/><br/>
                    <h1>Projects</h1>
                    {mapped}
            </Container>
        );
    };
};

const Container = styled.div`
    display: none;

    h3 {
        text-align: center;
        padding-bottom: 10px;
        color: rgba(255,255,255,0.9);

    }
    div {
        display: inline-block;
        width: 20%;
        margin: 2.5%;
    }
    img {
        width: 100%;
        border-radius: 6px;
    }
    section {
        color: #fff;
        text-align: center;
        font-size: 12px;
    }
    @media screen and (max-width: 760px) {
        display: block;
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
            font-size: 3vw;
            font-weight: 800;
        } 
    }

`;