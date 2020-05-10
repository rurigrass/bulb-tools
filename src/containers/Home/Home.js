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
    margin: 1.5em;
    width: 15em;
    height: 15em;
    border-radius: 15px;
    cursor: pointer;
`

// I PLAN TO INSERT THE IMAGES
// const CardImage = styled.img`
//     width: 10em;
//     margin-left: 1em;
// `
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
            <Link to='/ssc-finder'>
                <Card>
                    SSC/TPR Finder
                </Card>
            </Link>
            <Link to='/business'>
                <Card>
                    Business
                </Card>
            </Link>
        </Wrapper>
    );
};

export default Home;