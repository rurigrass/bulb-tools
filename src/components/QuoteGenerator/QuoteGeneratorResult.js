import React from 'react';

export const QuoteGeneratorResult = (props) => {

    const { tariff,
        SSC,
        energyType,
        meterRate,
        meterType,
        meterPoint } = props;

    let elecUnitRate

    const exclVAT = (price) => {
        const fivePercent = price / 100 * 5
        return price - fivePercent
    }

    if (meterRate === "1-rate" || meterRate === "1-rate for E7") {
        elecUnitRate =
            <tr>
                <td data-label="Unit Rate"><b>Unit Rate</b></td>
                <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.oneRate * 100).toFixed(4)}p per kWh</td>
                <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.oneRate * 100).toFixed(4)}p per kWh</td>
                <td></td>
            </tr>
    } else if (meterRate === "2-rate") {
        elecUnitRate = Object.keys(tariff.residential.current[meterType].elec.twoRate).map(rate => {
            return (
                <tr key={rate}>
                    <td data-label="Unit Rate"><b>{rate.charAt(0).toUpperCase() + rate.slice(1)}Rate</b></td>
                    <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.twoRate[rate] * 100).toFixed(4)}p per kWh</td>
                    <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.twoRate[rate] * 100).toFixed(4)}p per kWh</td>
                    <td></td>
                </tr>
            )
        })
    } else {
        elecUnitRate =
            <tr>
                <td data-label="Unit Rate"><b>Unit Rate</b></td>
                <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.twoRate.night * 100).toFixed(4)}p per kWh</td>
                <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.twoRate.night * 100).toFixed(4)}p per kWh</td>
                <td></td>
            </tr>
    }

    return (
        <div>
            <div className="ui segment" style={{ marginBottom: "10px" }}>
                <div className="ui header">
                    SSC {SSC + " "}
                    {meterType.charAt(0).toUpperCase() + meterType.slice(1) + " "}
                    {meterRate.charAt(0).toUpperCase() + meterRate.slice(1)}
                </div>
                <table className="ui very basic collapsing celled table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>excl. VAT</th>
                            <th>incl. VAT</th>
                            <th>EAC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elecUnitRate}
                        {meterPoint === "First" ?
                            <tr>
                                <td data-label="Unit Rate"><b>Standing Charge</b></td>
                                <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].elec.standing * 100).toFixed(3)}p per day
                                </td>
                                <td data-label="Energy Cost">{(tariff.residential.current[meterType].elec.standing * 100).toFixed(3)}p per day
                                </td>
                                <td> £{(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year
                                </td>
                            </tr>
                            :
                            <tr>
                                <td data-label="Unit Rate"><b><s>Standing Charge</s></b></td>
                                <td data-label="Energy Cost"><s>{exclVAT(tariff.residential.current[meterType].elec.standing * 100).toFixed(3)}p per day
                                </s></td>
                                <td data-label="Energy Cost"><s>{(tariff.residential.current[meterType].elec.standing * 100).toFixed(3)}p per day
                                </s></td>
                                <td><s> £{(tariff.residential.current[meterType].elec.standing * 365).toFixed(2)} per year
                                </s></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            {energyType === "dual fuel" ?
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