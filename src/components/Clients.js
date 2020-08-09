import React from 'react';
import styled from 'styled-components';

const Clients =()=> {
    return(
            <Container>
                <h1>Clients</h1>
                <div>
                    <MobileImg src="./clients/prana-wellness.png"/>
                    <DesktopImg src="./clients/prana-wellness.png"/>
                    <section>
                        <h2>
                            PRANA WELLNESS:
                        </h2>
                        <a target="_blank" rel="noopener noreferrer" href="https://pranawellnessworks.com/">
                            pranawellnessworks.com
                        </a>
                        <p>
                            “Prana is Sanskrit for breath, considered as a life-giving force.  
                            Prana is seen as a universal energy, which flows in currents in 
                            and around the body.”
                        </p>
                        <h3>
                            Responsibilities: 
                        </h3>
                        <ul>
                            <li>
                                Build custom fullstack website for client w/ admin portal
                            </li>
                            <li>
                                Automate email campaign with MailChimp
                            </li>
                            <li>
                                Update as needed
                            </li>
                        </ul>
                        <h3>
                            Technologies: 
                        </h3>
                        <span>
                            React, CSS, HTML, Firebase, Photoshop, Mailchimp
                        </span>
                        <hr/>   
                    </section>

                </div>
                <div>
                    <MobileImg src="./clients/fitplan-giftcard.png"/>
                    <section>
                        <h2>
                            FITPLAN:
                        </h2>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.https://www.fitplanapp.com/">
                            fitplanapp.com
                        </a>
                        <p>
                            “Workout with elite personal trainers”
                        </p>
                        <h3>
                            Responsibilities:
                        </h3>
                        <ul>
                            <li>
                                Create custom emails using MailChimp, HTML and CSS style
                            </li>
                            <li>
                                Frontend web development- design and develop
                            </li>
                            <li>
                                Trouble shoot & build out athlete websites on Shopify
                            </li>
                        </ul>
                        <h3>
                            Technologies: 
                        </h3>
                        <span>
                            React, Liquid, CSS, HTML, Photoshop, Figma, Zeplin
                        </span>
                        <hr/>   
                    </section>
                    <DesktopImg src="./clients/fitplan-giftcard.png"/>
                </div>
                <div>
                    <MobileImg src="./clients/heatseeker.png"/>
                    <DesktopImg src="./clients/heatseeker.png"/>
                    <section>
                    <h2>
                        HeatSeeker Hot Sauce:
                    </h2>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.heatseekersauce.com">
                        heatseekersauce.com
                    </a>
                    <p>
                        "Bold and minimal, pure and simple. We believe that it shouldn't take 57 
                        ingredients to create something amazing, but instead, a few, simple ingredients 
                        expertly combined for that perfect balance of flavor and heat. That's what we do."
                    </p>
                    <h3>Responsibilities:</h3>
                        <ul>
                            <li>
                                eCommerce Shopify w/ Wholesale
                            </li>
                            <li>
                                Customized Liquid
                            </li>
                            <li>
                                Streamlined content
                            </li>
                            <li>
                                Update as needed
                            </li>     
                        </ul>  
                        <h3>
                            Technologies: 
                        </h3>
                        <span>
                            Shopify, Liquid, CSS, HTML, Photoshop, Figma
                        </span>
                        <hr/>   
                    </section>
                </div>
                <div>
                    <MobileImg src="./clients/it-afterhours.png"/>
                    <section>
                    <h2>
                        IT After Hours:
                    </h2>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.it-afterhours.com">
                        it-afterhours.com
                    </a>
                    <p>
                        "IT After Hours is the only professional, affordable computer 
                        service company conveniently available evenings and weekends. 
                        IT After Hours started when a passion for computers turned into a 
                        career in Information Technology. During my time as an IT Professional, 
                        I noticed a lack of on site computer support in the San Diego area 
                        after 5pm. Sure, you can schedule an appointment at 7pm, if you’re willing 
                        to pay the “After Hours Rate” of 200%-300% the regular price. This is where 
                        I decided to step in."
                    </p>
                    <h3>Responsibilities:</h3>                                            
                        <ul>
                            <li>
                                Streamline WordPress
                            </li>
                            <li>
                                Customized CSS code
                            </li>
                            <li>
                                Make mobile scalable
                            </li>
                            <li>
                                Improve UX/UI experience
                            </li>
                            <li>
                                Resolve bugs
                            </li>
                            <li>
                                Currently undergoing updates
                            </li>
                        </ul>
                        <h3>
                            Technologies: 
                        </h3>
                        <span>
                            WordPress, CSS, HTML
                        </span>
                        <hr/>   
                    </section>
                    <DesktopImg src="./clients/it-afterhours.png"/>
                </div>
                
                
            </Container>
        );
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
    text-align: center;
    background-color: #fff;
    text-align: left;

    div {
        margin: 0 auto;
        max-width: 800px;
        text-align: center;
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

export default Clients;