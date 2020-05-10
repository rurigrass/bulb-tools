import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

export const Dropdown = (props) => {

    const { options, changeFn } = props
    
    const SelectExample = () => (
        <select placeholder='Select' onChange={changeFn}>
            {options.map(e => <option key={e.key} value={e.value}>{e.text}</option>)}
        </select>
    )

    return (
        <Wrapper>
            {/* <div className="ui search selection dropdown">
                <input type="hidden" name="gender" />
                <i className="dropdown icon"></i>
                <div className="default text">SSC</div>
            </div> */}
            {SelectExample(options)}
        </Wrapper>
    );
};

