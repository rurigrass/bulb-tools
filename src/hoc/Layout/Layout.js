import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../Aux/Aux';

const Layout = (props) => {
    return (
        <Aux>
            <header className="ui menu"><Link to="/">Bulb</Link></header>
            <main>{props.children}</main>
        </Aux>
    );
};

export default Layout;