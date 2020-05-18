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
const Prepay = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "white", marginBottom: "-.5em" }}>Prepay</h1>
            <Wrapper>
                <Link to='/prepay/paypoint-finder'>
                    <Card>
                        Paypoint Finder
                    </Card>
                </Link>
            </Wrapper>
        </div>
    );
};

export default Prepay;