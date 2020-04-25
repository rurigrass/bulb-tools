import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Aux from '../Aux/Aux';

const Header = styled.header`
    height: 3.5rem;
    background-color: #001A4D;
`
const Layout = (props) => {
    return (
        <Aux>
            <Header><Link to="/">Bulb</Link></Header>
            <main>{props.children}</main>
        </Aux>
    );
};

export default Layout;