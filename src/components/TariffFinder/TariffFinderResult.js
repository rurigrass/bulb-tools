import React from 'react';

const TariffFinderResult = (props) => {

    const { tariff,
        energyType,
        meterRate,
        meterType } = props;

    let elecUnitRate

    const exclVAT = (price) => {
        const fivePercent = price / 100 * 5
        return price - fivePercent
    }

    if (meterRate === "1-rate") {
        elecUnitRate =
            <tr>
                <td data-label="Unit Rate"><b>Unit Rate</b></td>
                <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.oneRate * 100).toFixed(4)}p per kWh</td>
                <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.oneRate * 100).toFixed(4)}p per kWh</td>
            </tr>
    } else if (meterRate === "2-rate") {
        elecUnitRate = Object.keys(tariff.residential.current[meterType].elec.twoRate).map(rate => {
            return (
                <tr key={rate}>
                    <td data-label="Unit Rate"><b>{rate.charAt(0).toUpperCase() + rate.slice(1)}Rate</b></td>
                    <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.twoRate[rate] * 100).toFixed(4)}p per kWh</td>
                    <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.twoRate[rate] * 100).toFixed(4)}p per kWh</td>
                </tr>
            )
        })
    } else {
        return (null)
    }


    return (
        <div style={{ marginBottom: "10px" }}>
            {energyType === "dual fuel" || energyType === "Electricity" ?
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
                                <td data-label="Unit Rate"><b>Standing Charge</b></td>
                                <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.standing * 100).toFixed(3)}p per day (£{exclVAT(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                                <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.standing * 100).toFixed(3)}p per day (£{(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                : null}
            {energyType === "dual fuel" || energyType === "Gas" ?
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
                                <td data-label="Unit Rate"><b>Unit Rate</b></td>
                                <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].gas.oneRate * 100).toFixed(4)}p per kWh</td>
                                <td data-label="Energy Cost">{(tariff.residential.current[meterType].gas.oneRate * 100).toFixed(4)}p per kWh</td>
                            </tr>
                            <tr>
                                <td data-label="Unit Rate"><b>Standing Charge</b></td>
                                <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].gas.standing * 100).toFixed(3)}p per day (£{exclVAT(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                                <td data-label="Energy Cost">{(tariff.residential.current[meterType].gas.standing * 100).toFixed(3)}p per day (£{(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                : null}
        </div>
    );
};

export default TariffFinderResult;