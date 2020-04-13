import React from 'react';

const NextStatementDateInput = (props) => {
    return (
        <div>
            <input type="date" onChange={props.statementDate} />
        </div>
    );
};

export default NextStatementDateInput;