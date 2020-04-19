import React from 'react';

const DisputeCalculatorResult = (props) => {

    return (
        <div>
            <div>
                <div className="ui segment">
                    <div className="ui header">
                        Dispute reading: {props.disputeReading.toFixed(2)} {props.energyType === "Electricity" ? <span>KwH</span> : <span>m3</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisputeCalculatorResult;