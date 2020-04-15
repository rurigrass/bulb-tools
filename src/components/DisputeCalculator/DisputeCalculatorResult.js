import React from 'react';

const DisputeCalculatorResult = (props) => {
    return (
        <div>
            <div>
                <div className="ui segment">
                    <div className="ui header">
                        Dispute reading: {props.disputeReading}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisputeCalculatorResult;