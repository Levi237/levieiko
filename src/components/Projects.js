import React  from 'react';
import styled from 'styled-components';

const Projects =()=> {
    return(
        <Container>

            <div>
                    <h3>PokeGen</h3>
                    <a 
                    alt="PokeGen" 
                    target="_blank"
                    href="https://pokegen.herokuapp.com/"
                    >
                    <img src="./projects/pokegen.png"/>
                </a>
                <section>
                    Build your own Pokemon Card MEME.
                    <br/>
                    Login, create, and share.
                </section>
            </div>
            <div>
                <h3>Hi Sierra!</h3>
                <a 
                alt="Hi Sierra!" 
                target="_blank"
                href="https://parkintel.herokuapp.com/home"
                >
                <img src="./projects/hi-sierra.png"/>
            </a>
            <section>
                Learn more about the National Parks.
                <br/>
                Track unexpected closures. 
            </section>
            </div>
            <div>
                <h3>LA-HOP</h3>
                <a 
                alt="Los Angeles Homeless Outreach Program" 
                target="_blank"
                href="https://lahsa-la-hopv2.herokuapp.com/request"
                >
                    <img src="./projects/la-hop.png"/>
                </a>
                <section>
                    Tools for the public to help
                    <br/>
                    report homeless needs.
                </section>
            </div>
            <div>
                <h3>BlackJack</h3>
                <a 
                alt="BlackJack" 
                target="_blank"
                href="https://levi237.github.io/blackjack-reup/"
                >
                    <img src="./projects/blackjack.png"/>
                </a>
                <section>
                    Bid, Hit, Double Down, Call.
                    <br/>
                    Black Jack circa 1990.
                </section>
            </div>
        </Container>
    );
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
            font-size: 2.25vw;
        } 
    }

`;

export default Projects;