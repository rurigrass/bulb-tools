import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    margin: 0 .5rem 0 0; 
`;

export const CheckBox = (props) => {
    return (
        <Wrapper className="ui checkbox">
            <input type="checkbox" name={props.label} checked={props.checked} onChange={props.checkBoxFn}/>
            <label>{props.label}</label>
        </Wrapper>
    );
};

