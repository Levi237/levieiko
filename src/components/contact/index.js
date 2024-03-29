import React        from 'react';
import styled       from 'styled-components';

import EmailForm    from './EmailForm';

const ContactPage = () => { 
    return(
        <Container id="contact" className="contact-container">
            <EmailForm>
            <h1 className="titleDecoration">CONTACT</h1>
            </EmailForm>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    width: 100vw;
    height: calc(100vh);
    overflow: scroll;
    padding-top: 0;
    .svg > path:hover {
        fill: #ccc!important;
    }
    h1 {
        color: rgba(75, 125, 190, 1);
        padding-top: 40px;
        padding-bottom: 20px;
        margin: 0 auto!important;
    }
    p {
        margin-top: 40px;
        padding: 0 5%;
        color: rgba(24, 23, 23, .75);
    }
    @media screen and (max-width: 745px) {
        align-items: start;
        h1 {
            padding-top: 0;
            padding-bottom: 10px;
        }
        p {
            margin-top: 20px;
    }
`;

export default ContactPage;