import React from 'react';

const DisputeCalculatorResult = (props) => {

    const { energyType,
        disputeReadingDay,
        disputeReadingNight } = props;

    let disputedReading

    if (disputeReadingNight) {
        disputedReading =
            <div className="ui segment">
                <div className="ui header">
                    Dispute reading day: {disputeReadingDay.toFixed(2)} {energyType === "Electricity" ? <span>KwH</span> : <span>m3</span>}
                </div>
                <div className="ui header">
                    Dispute reading night: {disputeReadingNight.toFixed(2)} {energyType === "Electricity" ? <span>KwH</span> : <span>m3</span>}
                </div>
            </div>
    } else {
        disputedReading =
            <div className="ui segment">
                <div className="ui header">
                    Dispute reading: {disputeReadingDay.toFixed(2)} {energyType === "Electricity" ? <span>KwH</span> : <span>m3</span>}
                </div>
            </div>
    }

    return (
        <div style={{ marginTop: "10px" }}>
            {disputedReading}
        </div>
    );
};

export default DisputeCalculatorResult;