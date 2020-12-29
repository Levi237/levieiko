import React, { Component } from 'react';
import styled               from 'styled-components';

import ContactRequest       from './ContactRequest';

export default class EmailSignup extends Component { 
    
    render(){

        const { toggleEmailSignup } = this.props
        return(
            <Container id="email" className="inactive contact-container">
                <CloseBtn name="emailForm" className="close xClose white" onClick={(e) => {toggleEmailSignup(e)}}>X</CloseBtn>
                <ContactRequest/>
            </Container>
        );
    };
};

const Container = styled.div`
    position: fixed;
    overflow: scroll;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 745px) {
        align-items: start;
        background-color: #fff;
    }

    p {
        text-align: center;
        background-color: white;
    }
    
    form {
        text-align: center;
        max-width: 600px;
        background-color: white;
        padding: 20px 0;
        @media screen and (max-width: 900px) {
            padding: 40px 0 20px 0;
        }
    }
    form input {
        height: 36px;
        margin: 5px auto;
        font-size: 18px;
        border-width: 1px;
        border-radius: 0px;
    }
    form input[type=submit] {
        background-color: #fff;
        height: 36px;
        width: 150px;
        color: #181717;
        border: #181717 solid 1px;
        line-height: 100%;
        position: relative;
        z-index: 900;
        border-radius: 0;
        font-size: 18px;
        text-transform: uppercase;
    }
    form button {
        border-radius: 0px;
        border: 1px solid black;;
        background: transparent;
    }
    form label {
        width: 44%;
        &:nth-of-type(even){
            margin-left: 1.75%
        }
        textarea {
            width: 86%;
            border: 1px solid black;
            border-radius: 0px;
            height: 150px;
            margin: 5px 0;
            font-family: Montserrat, Arial;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #473E4E;
            padding: 2%;
        }
    }
`;

const CloseBtn = styled.button`
    background-color: transparent;
    border-radius: 100px;

    font-size: 14px;
    max-height: 30px;
    max-width: 30px;
    min-height: 30px;
    min-width: 30px;

    padding: 0;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 99999;
`;