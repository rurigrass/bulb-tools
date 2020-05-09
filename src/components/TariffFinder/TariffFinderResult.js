import React from 'react';

const TariffFinderResult = (props) => {

    const { tariff,
        meterRate,
        meterType } = props;

    let elecUnitRate

    const exclVAT = (price) => {
        const fivePercent = price / 100 * 5
        return price - fivePercent
    }

    if (meterRate === "1 rate") {
        elecUnitRate =
            <tr>
                <td data-label="Unit Rate">Unit Rate</td>
                <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.oneRate * 100).toFixed(4)}p per kWh</td>
                <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.oneRate * 100).toFixed(4)}p per kWh</td>
            </tr>
    } else {
        elecUnitRate = Object.keys(tariff.residential.current[meterType].elec.twoRate).map(rate => {
            return (
                <tr key={rate}>
                    <td data-label="Unit Rate">{rate.charAt(0).toUpperCase() + rate.slice(1)} Rate</td>
                    <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.twoRate[rate] * 100).toFixed(4)}p per kWh</td>
                    <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.twoRate[rate] * 100).toFixed(4)}p per kWh</td>
                </tr>
            )
        })
    }


    return (
        <div>
            <div className="ui segment">
                <div className="ui header">
                    {meterType.charAt(0).toUpperCase() + meterType.slice(1)} Electricity
                </div>
                <table className="ui very basic collapsing celled table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>excl. VAT</th>
                            <th>incl. VAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elecUnitRate}
                        <tr>
                            <td data-label="Unit Rate">Standing Charge</td>
                            <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.standing * 100).toFixed(3)}p per day (£{exclVAT(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                            <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.standing * 100).toFixed(3)}p per day (£{(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="ui segment">
                <div className="ui header">
                    {meterType.charAt(0).toUpperCase() + meterType.slice(1)} Gas
                </div>
                <table className="ui very basic collapsing celled table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>excl. VAT</th>
                            <th>incl. VAT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Unit Rate">Unit Rate</td>
                            <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].gas.oneRate * 100).toFixed(4)}p per kWh</td>
                            <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].gas.oneRate * 100).toFixed(4)}p per kWh</td>
                        </tr>
                        <tr>
                            <td data-label="Unit Rate">Standing Charge</td>
                            <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].gas.standing * 100).toFixed(3)}p per day (£{exclVAT(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                            <td data-label="Energy Cost">{(tariff.residential.current[meterType].gas.standing * 100).toFixed(3)}p per day (£{(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TariffFinderResult;