import React, { Component } from 'react';
import styled from 'styled-components';

export default class PastClients extends Component {
    state = {
        pastClientList: [{
            title: `FITPLAN`,
            link: `fitplanapp.com`,
            image: `./clients/fitplan-giftcard.png`,
            status: `live`,
            startDate: ``,
            endDate: ``,
            statement: `Workout with elite personal trainers.`,
            responsibilities: [`Custom email: design & marketing`, `Web development, design & troubleshooting`, `Graphic design`],
            technologies: [`React`,`Liquid`,`CSS3`,`HTML5`,`WordPress`, `Shopify`, `Photoshop`,`Figma`,`MailChimp`]
        },{
            title: `IT After Hours`,
            link: `it-afterhours.com`,
            image: `./clients/it-afterhours.png`,
            status: `inactive`,
            startDate: ``,
            endDate: ``,
            statement: `IT After Hours is the only professional, affordable computer service company conveniently available evenings and weekends. IT After Hours started when a passion for computers turned into a career in Information Technology.`,
            responsibilities: [`Streamline WordPress & resolve bugs`, `Customize CSS3 code upgrades`, `Make mobile friendly`, `Currently undergoing host & server`],
            technologies: [`WordPress`, `CSS3`, `HTML5`]
        },{
            title: `HeatSeeker Hot Sauce`,
            link: `heatseekersauce.com`,
            image: `./clients/heatseeker.png`,
            status: `inactive`,
            startDate: ``,
            endDate: ``,
            statement: `Bold and minimal, pure and simple. We believe that it shouldn't take 57 ingredients to create something amazing, but instead, a few, simple ingredients expertly combined for that perfect balance of flavor and heat. That's what we do.`,
            responsibilities: [`Re-design eCommerce website`, `Streamline content & UX`],
            technologies: [`Shopify`, `Liquid`, `CSS3`, `HTML5`, `Photoshop`, `Figma`]
        },{
            title: `La Madre is Watching`,
            image: `./clients/lamadreiswatching-ongina.JPG`,
            link: `lamadreiswatching.com`,
            status: `inactive`,
            startDate: ``,
            endDate: ``,
            statement: `Photographing the edgy side of the Los Angeles night scene.`,
            responsibilities: [`Build custom social media website`, `Party events shareable photo gallery`, `Graphic design`],
            technologies: [`HTML`, `CSS`, `Javascript`]
        }]
    }
    render(){
        const { pastClientList } = this.state
        const mappastClientList = pastClientList.map((client, key) => {
            const responsibilitiesList = client.responsibilities.map((r, k) => {
                return <li key={k}>{r}</li>
            })
            const technologiesList = client.technologies.map((c, k) => {
                return <span key={k}>{c}</span>
            })
            return(
                <ClientContainer key={key}>
                    <MobileImg src={client.image} alt={client.title}/>
                    <section>
                        <h2>
                            {client.title}
                        </h2>
                        <>
                            {client.link}
                        </>
                        <p>
                            “{client.statement}”
                        </p>
                        <h3>
                            Responsibilities: 
                        </h3>
                        <ul>
                            {responsibilitiesList}
                        </ul>
                        <h3>
                            Technologies: 
                        </h3>
                            {technologiesList}
                        <hr/>   
                    </section>
                    <DesktopImg src={client.image} alt={client.title}/>
                    <hr/>
                </ClientContainer>
            )
        })
        return(
            <Container>
                {mappastClientList}                
            </Container>
        );
    };
};

const ClientContainer = styled.div`
    margin: 40px auto;
    max-width: 800px;
    text-align: center;

    section {
        width: 40%;
        padding: 5%;
        max-width: 400px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
        span::after {
            content ' | ';
        }
        span:last-of-type::after {
            content: '';
        }
    }
    
    img {
        width: 50%;
        max-width: 400px;
        margin-top: 5%;
        box-shadow: 0 1px 12px rgba(0,0,0,.2);
    }
    &:nth-of-type(odd) img:last-of-type {
        float: left;
    }

    a {
        color: grey!important;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    h1 {
        margin-bottom: 10px!important;
    }
    h3 {
        font-size: 16px;
    }
    p {
        font-style: italic;
        font-size: 14px;
        margin: 10px auto;
    }
    ul, span {
        font-size: 14px;
    }
    ul {
        margin: 10px auto!important;
    }
    >hr {
        width: 100%;
        margin: 40px auto 20px;
    }
    >hr:last-of-type {
        margin: 40px auto 0;
    }
    section > hr {
        display: none;
    }
    @media screen and (max-width: 900px) {
        >hr {
            display: none;
        }
        section > hr {
            display: block;
            width: 80%;
            margin: 5% auto;
        }
    }
`;

const DesktopImg = styled.img`
    display: inline-block;
    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const MobileImg = styled.img`
    display: none;
    @media screen and (max-width: 900px) {
        display: block;
`;
const Container = styled.div`
    position: relative;
    hr {
        height: 1px;
        background-color: #fff;
        border: none;
    }

    @media screen and (max-width: 900px) {
        section, img {
            width: 90%;
            margin: auto;
        }
        >hr {
            display: none;
        }
    }
`;