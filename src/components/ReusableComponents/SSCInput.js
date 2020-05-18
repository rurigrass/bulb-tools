import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  margin-top: .4rem;

  & > * {
    margin: 0 1.5rem 1rem 0;
  }
`;

export const SSCInput = props => {

        console.log(props.agreement);


    return (
        <Wrapper key={props.meterPoint}>
            <h5>{`${props.meterPoint} ${props.label}`}</h5>
            <div className="ui input">
                <input
                    name={props.meterPoint + "SSC"}
                    type="number"
                    max="999"
                    placeholder={`${props.meterPoint} ${props.label}`}
                    onChange={props.InputFn} />
            </div>
        </Wrapper>
    )
}

