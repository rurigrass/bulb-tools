import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/bulb-logo-white.png'

import Aux from '../Aux/Aux';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #001A4D;
    height: 3.5rem;
    margin-bottom: .5rem;
    `
    
const FeedbackButton = styled.a`
    background-color: #E94EA5;
    color: white;
    padding: .2em 1em;
    border-radius: 25em;
    margin-right: 1rem;
    font-size: 16px;
    `

const HeaderLogo = styled.img`
    width: 5rem;
    margin-left: 1rem;
    `
const Layout = (props) => {
    return (
        <Aux>
            <Header>
                <Link to="/"><HeaderLogo src={logo} /></Link>
                <FeedbackButton
                    href="https://forms.gle/ajZbBee2py9M9QKv6"
                    target="_blank"
                    rel="noopener noreferrer">
                    Feedback
                </FeedbackButton>
            </Header>
            <main>{props.children}</main>
        </Aux>
    );
};

export default Layout;