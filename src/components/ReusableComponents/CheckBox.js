import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 1.5rem 1rem 0; 
`;

export const CheckBox = (props) => {
    return (
        <Wrapper className="ui checkbox">
            <input type="checkbox" name={props.label} checked={props.checked} onChange={props.checkBoxFn}/>
            <label>{props.label}</label>
        </Wrapper>
    );
};

