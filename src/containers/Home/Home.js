import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;  
`

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #01AB55;
    margin: 1.5rem;
    width: 15rem;
    height: 15rem;
    border-radius: 15px;
    cursor: pointer;
`
const Home = () => {
    return (
        <Wrapper>
            <Link to='/bill-calculator'>
                <Card>
                    Bill Calculator
                </Card>
            </Link>
            <Link to='/tariff-finder'>
                <Card>
                    Tariff Finder
                </Card>
            </Link>
            <Link to='/dispute-calculator'>
                <Card>
                    Dispute Calculator
                </Card>
            </Link>
        </Wrapper>
    );
};

export default Home;