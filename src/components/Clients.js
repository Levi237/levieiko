import React, { Component } from 'react';
import styled from 'styled-components';

export default class Clients extends Component {
    state = {
        clientList: [{
            title: "Prana Wellness",
            image: "./clients/prana-wellness.png",
            link: "pranawellnessworks.com",
            statement: "Prana is Sanskrit for breath, considered as a life-giving force.  Prana is seen as a universal energy, which flows in currents in and around the body.",
            responsibilities: ["Build custom fullstack website for client w/ admin portal", "Automate email campaign with MailChimp", "Update as needed"],
            technologies: ["React", "CSS", "HTML", "Firebase", "Photoshop", "MailChimp"]
        },{
            title: "FITPLAN",
            link: "fitplanapp.com",
            image: "./clients/fitplan-giftcard.png",
            statement: "Workout with elite personal trainers.",
            responsibilities: ["Create custom emails using MailChimp, HTML and CSS style", "Frontend web development- design and develop", "Trouble shoot & build out athlete websites on Shopify"],
            technologies: ["React","Liquid","CSS","HTML","Photoshop","Figma","Zeplin"]
        },{
            title: "HeatSeeker Hot Sauce",
            link: "heatseekersauce.com",
            image: "./clients/heatseeker.png",
            statement: "Bold and minimal, pure and simple. We believe that it shouldn't take 57 ingredients to create something amazing, but instead, a few, simple ingredients expertly combined for that perfect balance of flavor and heat. That's what we do.",
            responsibilities: ["eCommerce Shopify w/ Wholesale", "Customized Liquid", "Streamline content & UX", "Update as needed"],
            technologies: ["Shopify", "Liquid", "CSS", "HTML", "Photoshop", "Figma"]
        },{
            title: "IT After Hours",
            link: "it-afterhours.com",
            image: "./clients/it-afterhours.png",
            statement: "IT After Hours is the only professional, affordable computer service company conveniently available evenings and weekends. IT After Hours started when a passion for computers turned into a career in Information Technology.",
            responsibilities: ["Streamline WordPress & resolve bugs", "Customize CSS code upgrades", "Make mobile friendly", "Currently undergoing host & server"],
            technologies: ["WordPress", "CSS", "HTML"]
        }]
    }
    render(){
        const { clientList } = this.state
        const mapClientList = clientList.map((client, key) => {
            const responsibilitiesList = client.responsibilities.map((r, k) => {
                return <li key={k}>{r}</li>
            })
            const technologiesList = client.technologies.map((c, k) => {
                return <span key={k}>{c} </span>
            })
            return(
                <div key={key}>
                    <MobileImg src={client.image} alt={client.title}/>
                    <section>
                        <h2>
                            {client.title}
                        </h2>
                        <a target="_blank" rel="noopener noreferrer" href={client.link}>
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
                </div>
            )
        })
        return(
            <Container>
                <h1>Clients</h1>
                    {mapClientList}                
            </Container>
        );
    };
};
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
    background-color: #fff;
    div {
        margin: 0 auto;
        max-width: 800px;
        text-align: center;
        &:nth-of-type(odd) img:last-of-type {
            float: left;
        }
    }
    section {
        width: 40%;
        padding: 5%;
        max-width: 400px;
        display: inline-block;
        vertical-align: top;
        text-align: left;
    }
    img {
        width: 50%;
        max-width: 400px;
        margin-top: 5%;
        box-shadow: 0 1px 12px rgba(0,0,0,.2);
    }
    a {
        color: grey!important;
        text-decoration: none;
        &:hover {
            color: dodgerblue!important;
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
        font-size: 12px;
        margin: 10px auto;
    }
    ul, span {
        font-size: 14px;
    }
    ul {
        margin-bottom: 10px!important;
    }
    hr {
        display: none;
    }
    @media screen and (max-width: 900px) {
        section, img {
            width: 90%;
            margin: auto;
        }
        hr {
            display: block;
        }
    }
`;