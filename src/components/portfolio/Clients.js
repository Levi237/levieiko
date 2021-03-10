import React, { Component } from 'react';
import styled from 'styled-components';

export default class Clients extends Component {
    state = {
        clientList: [{
        title: "Andrea Sells Maui",
            image: "./clients/andreasellsmaui.png",
            link: "andreasellsmaui.com",
            statement: "Maui real estate agent serving her local community",
            responsibilities: ["Build custom real estate website", "Integrate IDX Broker", "Graphic design"],
            technologies: ["WordPress", "CSS3", "HTML5", "Javascript", "VanillaJs", "Photoshop", "Figma", "IDX Broker"]
        },{
            title: "Momo[Muscle]",
            image: "./clients/momomuscle.png",
            link: "momomuscle.co",
            statement: "Basically, I design tools to teach women & AFAB babes to see sustainable results in less time. I want you to feel more like yourself & fitness is the catalyst.",
            responsibilities: ["Build custom eCommerce website", "custom Quiz w/ email campaign", "MailChimp email marketing", "Graphic design"],
            technologies: ["Shopify", "CSS3", "HTML5", "Liquid", "Javascript", "VanillaJs", "Photoshop", "Figma", "MailChimp"]
        },{
            title: "Prana Wellness",
            image: "./clients/prana-wellness.png",
            link: "pranawellnessworks.com",
            statement: "Prana is Sanskrit for breath, considered as a life-giving force.  Prana is seen as a universal energy, which flows in currents in and around the body.",
            responsibilities: ["Build custom business website", "Automate email campaign with MailChimp", "Graphic design"],
            technologies: ["React", "Javascript", "VanillaJs", "CSS3", "HTML5", "Firebase", "Photoshop", "Figma", "MailChimp"]
        },{
            title: "FITPLAN",
            link: "fitplanapp.com",
            image: "./clients/fitplan-giftcard.png",
            statement: "Workout with elite personal trainers.",
            responsibilities: ["Custom email: design & marketing", "Web development, design & troubleshooting", "Graphic design"],
            technologies: ["React","Liquid","CSS3","HTML5","WordPress", "Shopify", "Photoshop","Figma","MailChimp"]
        },{
        //     title: "IT After Hours",
        //     link: "it-afterhours.com",
        //     image: "./clients/it-afterhours.png",
        //     statement: "IT After Hours is the only professional, affordable computer service company conveniently available evenings and weekends. IT After Hours started when a passion for computers turned into a career in Information Technology.",
        //     responsibilities: ["Streamline WordPress & resolve bugs", "Customize CSS3 code upgrades", "Make mobile friendly", "Currently undergoing host & server"],
        //     technologies: ["WordPress", "CSS3", "HTML5"]
        // },{
            title: "HeatSeeker Hot Sauce",
            link: "heatseekersauce.com",
            image: "./clients/heatseeker.png",
            statement: "Bold and minimal, pure and simple. We believe that it shouldn't take 57 ingredients to create something amazing, but instead, a few, simple ingredients expertly combined for that perfect balance of flavor and heat. That's what we do.",
            responsibilities: ["Re-design eCommerce website", "Streamline content & UX"],
            technologies: ["Shopify", "Liquid", "CSS3", "HTML5", "Photoshop", "Figma"]
        }]
    }
    render(){
        const { clientList } = this.state
        const mapClientList = clientList.map((client, key) => {
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
                        <a target="_blank" rel="noopener noreferrer" href={`https://${client.link}`}>
                            {client.link}
                        </a>
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
                    {mapClientList}                
            </Container>
        );
    };
};

const ClientContainer = styled.div`
    margin: 0 auto;
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
        margin-bottom: 10px!important;
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