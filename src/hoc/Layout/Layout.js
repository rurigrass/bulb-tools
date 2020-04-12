import React from 'react';
import Aux from '../Aux/Aux';

const Layout = (props) => {
    return (
        <Aux>
            <header>header</header>
            <main>{props.children}</main>
        </Aux>
    );
};

export default Layout;