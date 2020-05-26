import React from 'react';

import format from 'date-fns/format'

const DisputeCalculatorResult = (props) => {

    const { energyType,
        disputeReadingDay,
        disputeReadingNight,
        disputeDate,
        energyOneDay,
        energyOneNight } = props;

    let disputedReading, unit

    unit = energyType === "Electricity" ? <span>KwH</span> : <span>m3</span>;

    if (disputeReadingNight) {
        disputedReading =
            <div className="ui segment">
                <table className="ui very basic collapsing celled table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Read on {format(new Date(disputeDate), "dd/MM/yy")}</th>
                            <th>Avg Day</th>
                            <th>EAC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Day</b></td>
                            <td>{disputeReadingDay.toFixed(0)}{unit}</td>
                            <td>{energyOneDay.toFixed(2)}{unit}</td>
                            <td>{(energyOneDay * 365).toFixed(0)}{unit}</td>
                        </tr>
                        <tr>
                            <td><b>Night</b></td>
                            <td>{disputeReadingNight.toFixed(0)}{unit}</td>
                            <td>{energyOneNight.toFixed(2)}{unit}</td>
                            <td>{(energyOneNight * 365).toFixed(0)}{unit}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    } else {
        disputedReading =
            <div className="ui segment">
                <table className="ui very basic celled table">
                    <thead>
                        <tr>
                            <th>Read on {format(new Date(disputeDate), "dd/MM/yy")}</th>
                            <th>Avg Day</th>
                            <th>EAC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{disputeReadingDay.toFixed(0)}{unit}</td>
                            <td>{energyOneDay.toFixed(2)}{unit}</td>
                            <td>{(energyOneDay * 365).toFixed(0)}{unit}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    }

    return (
        <div style={{ marginTop: "10px" }}>
            {disputedReading}
        </div>
    );
};

export default DisputeCalculatorResult;