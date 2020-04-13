import React from 'react';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   display: grid;
//   width: 50%;

//   & > * {
//     margin: 0 0 1rem 0;
//   }
// `;
export const Postcode = (props) => {

  // const regionFn = (e) => {
  //   console.log(e.target.value);
  //   props.regionFn = e.target.value
  // }

  return (
    <div>
  {/* <Wrapper> */}
    <label>Postcode</label>
    <div className="ui input">
      <input type="text"  placeholder="Postcode" onChange={props.regionFn} />
    </div>
   {/* </Wrapper> */}
    </div>
  )
}
