import React from 'react';

const TariffFinderResult = (props) => {

    const { tariff,
        meterRate,
        meterType } = props;

    let elecUnitRate

    if (meterRate === "1 rate") {
        elecUnitRate =
            <tr>
                <td data-label="Unit Rate">Unit Rate</td>
                <td data-label="Energy Cost">{tariff.current[meterType].elec.oneRate}p per kWh</td>
            </tr>
    } else {
        elecUnitRate = Object.keys(tariff.current[meterType].elec.twoRate).map(rate => {
            return (
                <tr key={rate}>
                    <td data-label="Unit Rate">{rate} Rate</td>
                    <td data-label="Energy Cost">{tariff.current[meterType].elec.twoRate[rate]}p per kWh</td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div className="ui segment">
                <div className="ui header">
                    {meterType} Electricity
                </div>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                        {elecUnitRate}
                        <tr>
                            <td data-label="Unit Rate">Standing Charge</td>
                            <td data-label="Energy Cost">{tariff.current[meterType].elec.standing}p per day (£{(tariff.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="ui segment">
                <div className="ui header">
                    {meterType} Gas
                </div>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                        <tr>
                            <td data-label="Unit Rate">Unit Rate</td>
                            <td data-label="Energy Cost">{tariff.current[meterType].gas.oneRate}p per kWh</td>
                        </tr>
                        <tr>
                            <td data-label="Unit Rate">Standing Charge</td>
                            <td data-label="Energy Cost">{tariff.current[meterType].gas.standing}p per day (£{(tariff.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TariffFinderResult;