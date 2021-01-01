import React, { Component }  from 'react';
import styled from 'styled-components';

import FlipCards from './FlipCards';

export default class ProjectsFlip extends Component {

    render(){
        const { projects } = this.props;    
        return(
            <Container>
                <br/><br/><br/><br/>
                <h1>Projects</h1>
                <FlipCards projects={projects} />
            </Container>
        );
    };
};

const Container = styled.div`
    text-align: center;
    h3 {
        text-align: center;
        padding-bottom: 10px;
        color: rgba(255,255,255,0.9);
    }
    @media screen and (max-width: 760px) {
        display: none;
    }
`;
