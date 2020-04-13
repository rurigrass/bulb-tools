import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   width: 50%;

//   & > * {
//     margin: 0 1.5rem 1rem 0;
//   }
// `;

const RadioGroup = props => {
  const { name, selectedOption, options, changeFn } = props;


  return (
    // <Wrapper>
    <div>

      <h5>{name}</h5>
      {
        options.map((option => {
          return (
            <div key={`radio-${option}`} className="ui radio checkbox">
              <input
                type="radio"
                name={option}
                checked={selectedOption === option}
                onChange={changeFn}
              />
              <label>{option}</label>
            </div>
          );
        }))
      }
    </div>
    //  </Wrapper>
  );
};

RadioGroup.propTypes = {
  name: PropTypes.string,
  selectedOption: PropTypes.string,
  options: PropTypes.array,
  changeFn: PropTypes.func,
}

export default RadioGroup;
