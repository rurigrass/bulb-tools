import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Link to='/bill-calculator'>
                Bill Calculator
            </Link>
        </div>
    );
};

export default Home;