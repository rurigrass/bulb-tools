import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="ui cards" style={{ margin: "20px" }}>
            <Link to='/bill-calculator'>
                <div className="ui green card" style={{ margin: "20px" }}>
                    <div className="content">
                        <div className="header">
                            Bill Calculator
                            </div>
                    </div>
                </div>
            </Link>
            <Link to='/tariff-finder'>
                <div className="ui green card" style={{ margin: "20px" }}>
                    <div className="content">
                        <div className="header">
                            Tariff Finder
                            </div>
                    </div>
                </div>
            </Link>
            <Link to='/dispute-calculator'>
                <div className="ui green card" style={{ margin: "20px" }}>
                    <div className="content">
                        <div className="header">
                            Dispute Calculator
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Home;