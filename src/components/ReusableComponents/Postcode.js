import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & > * {
    margin: 0 .5rem .5rem 0;
  }
`;
export const Postcode = (props) => {

  // const regionFn = (e) => {
  //   console.log(e.target.value);
  //   props.regionFn = e.target.value
  // }

  return (
    // <div>
    <Wrapper>
      <h5>Postcode</h5>
      <div className="ui input">
        <input type="text" placeholder="Postcode" onChange={props.regionFn} />
      </div>
    </Wrapper>
    // </div>
  )
}

export const NumberInput = (props) => {
  return (
    <div className="ui input">
      <label>{props.label}</label>
      <input type="number" placeholder={props.searchParam} onChange={props.InputFn} />
    </div>
  )
}
