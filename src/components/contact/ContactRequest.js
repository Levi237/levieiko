import React, { Component } from 'react';
import styled from 'styled-components';

export default class ContactRequest extends Component { 
    state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
        locationValue: '',
        messageValue: '',
        addServices: ['Services Request:'],
        services: ["Online Store", "Business Website", "Email Marketing", "Graphic Design"]
    };

    handleSelect = (e, service) => {
        console.log(service)
        const { addServices } = this.state
        e.preventDefault();

        if (addServices.includes(service)){
            e.currentTarget.classList.remove('selectedHighlighted');
            this.setState(prevState => ({     
                addServices: addServices.filter(x => (
                    x !== service
                ))
            }));
        } else {
            e.currentTarget.classList.add('selectedHighlighted')
            this.setState({
                addServices: [...addServices, service]
            });
        };
    };

    render(){

        const { emailValue, fNameValue, lNameValue, locationValue, subjectValue, messageValue , addServices, services} = this.state

        const buttonSelectors = services.map((service, key) => {
            return(
                <ServiceBtn 
                    key={key} 
                    id={key}
                    name={service}
                    value={service}
                    className="select-service white"
                    onClick={(e) => {this.handleSelect(e, service)}
                }>
                   {service}
                </ServiceBtn>
            );
        });
        return(
                <Form 
                    action={`https://${process.env.REACT_APP_MAILCHIMP_SRC}/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`}
                    method="POST" 
                    id="mc-embedded-subscribe-form" 
                    name="mc-embedded-subscribe-form" 
                    className="validate" 
                    target="_blank" 
                    novalidate 
                >
                <label htmlFor='MERGE1'>
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={fNameValue}
                        placeholder="First Name" 
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                        required
                    />
                </label>
                <label htmlFor='MERGE2'>
                    <input 
                        type="text" 
                        name="LNAME" 
                        id="MERGE2" 
                        value={lNameValue}
                        placeholder="Last Name" 
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MERGE0'>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={emailValue}
                        placeholder="Email" 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        required
                     /> 
                </label>
                <label htmlFor='LOCATION'>
                    <input 
                        type="text" 
                        name="LOCATION" 
                        id="LOCATION" 
                        value={locationValue}
                        placeholder="Location" 
                        onChange={(e)=>{this.setState({locationValue: e.target.value});}}
                    />
                </label>

                <h3>What Services are you Interested In?:</h3>
                <div>
                    {buttonSelectors}
                    <input 
                        type="hidden" 
                        name="SERVICES" 
                        id="SERVICES" 
                        value={addServices}
                    />
                </div>

                <label htmlFor='MESSAGE'>
                    <textarea 
                        type="text" 
                        maxlength="255"
                        name="MESSAGE" 
                        id="MESSAGE" 
                        value={messageValue}
                        placeholder="Message" 
                        onChange={(e)=>{this.setState({messageValue: e.target.value});}}
                    />
                </label>
                <AuthFilter aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></AuthFilter>
                <div className="clear">
                    <input type="submit" value="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </Form> 
        );
    };
};

const ServiceBtn = styled.button`
    width: 150px;
    font-size: 20px;
    padding: 5px 15px;
    margin: 5px;
`;

const AuthFilter = styled.div`
    position: absolute; left: -5000px;
`;

const Form = styled.form`
    position: relative;
    z-index: 90000000000000000000000000000000000000;
    text-align: center;
    max-width: 700px;
    background-color: white;
    padding: 20px 0;


    input {
        height: 36px;
        margin: 5px auto;
        font-size: 18px;
        border-width: 1px;
        border-radius: 0px;
    }
    input[type=submit] {
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
    button {
        border-radius: 0px;
        border: 1px solid black;;
        background: transparent;
    }
    label {
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
    h3 {
        margin: 10px 0 0 0;
        text-transform: capitalize;
        color: #181717;
    }
    label {
        display: inline-block;

        &:nth-of-type(5){
            width: 100%;
            input {
                width: 86%;
                padding: 5px 2%!important;
            }
        }
        &:nth-of-type(6){
            width: 100%;
            margin-left: 0!important;
        }
        input {
            width: 90%;
            padding: 5px 5%;
        }
    }
    > div {
        max-width: 650px;
        margin: 0 auto;
        width: 100%;
        > button {
            vertical-align: top;
            width: 150px;
            height: 54px;
            font-size: 16px;
            padding: 5px 15px;
            margin: 5px;
        }
    }
    @media screen and (max-width: 900px) {
        padding: 40px 0 20px 0;
    }
    @media screen and (max-width: 698px) {
        > div {
            max-width: 320px;
        }
    }

`;