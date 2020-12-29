import React, { Component } from 'react';
import styled               from 'styled-components';

import ContactRequest       from './ContactRequest';

export default class EmailSignup extends Component { 
    
    render(){

        const { toggleEmailSignup } = this.props
        return(
            <Container id="contact" className="contact-container">
                <ContactRequest/>
            </Container>
        );
    };
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 745px) {
        align-items: start;
        background-color: #fff;
    }
`;