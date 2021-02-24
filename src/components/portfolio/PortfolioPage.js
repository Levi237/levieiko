import React, { Component } from 'react';
import styled               from 'styled-components';

import Skills               from './Skills';
import Clients              from './Clients';
import ProjectsFlip         from './ProjectsFlip';
import ProjectsMobile       from './ProjectsMobile';
// import Photography          from './Photography';

export default class PortfolioPage extends Component {
    state = {
        skills: [
            'React',
            'Firebase',
            'NodeJs',
            'GitHub',
            'Git',
            'Shopify',
            'WordPress',
            'MailChimp',
            'PhotoShop',
            'Liquid',
            'CSS',
            'HTML',
            'JavaScript',
            'VanillaJS'
        ],
        projects: [{
            title: 'PokeGen',
            image: './projects/pokegen.png',
            link: 'https://pokegen.herokuapp.com/',
            lineOne: 'Build your own Pokemon Card MEME.',
            lineTwo:'Login, create, and share.'
        },{
            title: 'Hi Sierra!',
            image: './projects/hi-sierra.png',
            link: 'https://parkintel.herokuapp.com/home',
            lineOne: 'Learn more about the National Parks.',
            lineTwo:'Track unexpected closures.'
        },{
            title: 'LA-HOP',
            image: './projects/la-hop.png',
            link: 'https://lahsa-la-hopv2.herokuapp.com/request',
            lineOne: 'Tools for the public to help',
            lineTwo: 'report homeless needs.'
        },{
            title: 'BlackJack',
            image: './projects/blackjack.png',
            link: 'https://levi237.github.io/blackjack-reup/',
            lineOne: 'Bid, Hit, Double Down, Call.',
            lineTwo: 'Black Jack circa 1990.'
        }]
    }
    render(){
        const { projects, skills } = this.state
        return (
            <Container>
                <h1 className='titleDecoration'>PORTFOLIO</h1>
                <Skills skills={skills}/>
                <Clients/>
                <ProjectsFlip projects={projects} /><ProjectsMobile projects={projects} />
                {/* <Photography/> */}
            </Container>
        );
    };
};

const Container = styled.div`
    background-color: rgba(19,17,17,.8);
    padding: 80px 0;
    margin: 0 auto!important;
    @media screen and (max-width: 745px){
        padding-top: 60px;
    }
`;