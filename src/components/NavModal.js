import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../constants/routes';

export default class NavModal extends Component {

    render(){
        const { toggleHamburger } = this.props;
        
        return(
            <NavContainer id="menu" className="inactive">
                <div>
                    {/* <button className="close xClose" onClick={() => {toggleHamburger()}}>
                         CLOSE X
                    </button> */}
                    {/* <br /><br /><br /><br /> */}
                    <NavLink activeClassName="nav-active" to={routes.HOME} onClick={() => {toggleHamburger()}}>HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} onClick={() => {toggleHamburger()}}>ABOUT</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.SERV} onClick={() => {toggleHamburger()}}>SERVICES</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.MAIL} onClick={() => {toggleHamburger()}}>CONTACT</NavLink>
                </div>
            </NavContainer>
        );
    };
};

const NavContainer = styled.div`
    text-align: center;
    font-size: 20px;
    right: 0;
    z-index: 111;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(19,17,17,.9);
    color: #FFF;
    position: fixed;
    a {
        text-decoration: none;
        display: block;
        height: 44px;
        padding-top: 20px;
        color: #FFF;
    }
    a:hover {
        color: #29bfff;
    }
    div {
        padding-top: 140px;
    }
    button {
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px;
        color: #FFF;
        border: none;
        font-size: 14px;
    }
`;