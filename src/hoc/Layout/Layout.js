import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../images/bulb-logo-white.png'

import Aux from '../Aux/Aux';

const Header = styled.header`
    display: flex;
    align-items: center;
    height: 3.5rem;
    background-color: #001A4D;
`

const HeaderLogo = styled.img`
    width: 5rem;
    margin-left: 1rem;
`
const Layout = (props) => {
    return (
        <Aux>
            <Header><Link to="/"><HeaderLogo src={logo} /></Link></Header>
            <main>{props.children}</main>
        </Aux>
    );
};

export default Layout;