import React from 'react';

export const QuoteGeneratorResult = (props) => {

    const { tariff,
        SSC,
        energyType,
        meterRate,
        meterType,
        meterPoint,
        EACS
    } = props;

    let elecCostInfo, gasCostInfo, totalCost = []

    const exclVAT = (price) => {
        const fivePercent = price / 100 * 5
        return price - fivePercent
    }

    elecCostInfo = (i) => {
        const standingCost = tariff.residential.current[meterType].elec.standing * 365
        if (meterRate[i] === "1-rate" || meterRate[i] === "1-rate for E7") {
            const EACCost = meterRate[i] === "1-rate" ? (tariff.residential.current[meterType].elec.oneRate * EACS[meterPoint[i]]) : (+EACS[meterPoint[i] + "Day"] + +EACS[meterPoint[i] + "Night"]) * tariff.residential.current[meterType].elec.oneRate
            totalCost.push(EACCost)
            if (meterPoint[i] === "First") { totalCost.push(standingCost) }
            return (
                <tr>
                    <td data-label="Unit Rate"><b>Unit Rate</b></td>
                    <td data-label="Energy Cost no VAT">{exclVAT(tariff.residential.current[meterType].elec.oneRate * 100).toFixed(4)}p per kWh</td>
                    <td data-label="Energy Cost VAT">{(tariff.residential.current[meterType].elec.oneRate * 100).toFixed(4)}p per kWh</td>
                    <td>
                        £{EACCost.toFixed(2)}
                    </td>
                </tr>
            )
        } else if (meterRate[i] === "2-rate") {
            let twoRateElecEACCost = []
            if (meterPoint[i] === "First") { totalCost.push(standingCost) }
            const twoRateResult = Object.keys(tariff.residential.current[meterType].elec.twoRate).map((rate, index) => {
                [totalCost, twoRateElecEACCost].forEach(arr => arr.push((EACS[meterPoint[i] + (rate.charAt(0).toUpperCase() + rate.slice(1))] * tariff.residential.current[meterType].elec.twoRate[rate])))
                return (
                    <tr key={rate}>
                        <td data-label="Unit Rate"><b>
                            {rate.charAt(0).toUpperCase() + rate.slice(1) + " "} Rate
                            </b></td>
                        <td data-label="Energy Cost no VAT">
                            {exclVAT(tariff.residential.current[meterType].elec.twoRate[rate] * 100).toFixed(4)}
                            p per kWh</td>
                        <td data-label="Energy Cost VAT">{(tariff.residential.current[meterType].elec.twoRate[rate] * 100).toFixed(4)}p per kWh</td>
                        <td>
                            £{twoRateElecEACCost[index].toFixed(2)}
                        </td>
                    </tr>
                )
            })
            return twoRateResult
        } else {
            const EACCost = tariff.residential.current[meterType].elec.twoRate.night * EACS[meterPoint[i]]
            totalCost.push(EACCost)
            if (meterPoint[i] === "First") { totalCost.push(standingCost) }
            return (
                <tr>
                    <td data-label="Unit Rate"><b>Unit Rate</b></td>
                    <td data-label="Energy Cost no VAT">{exclVAT(tariff.residential.current[meterType].elec.twoRate.night * 100).toFixed(4)}p per kWh</td>
                    <td data-label="Energy Cost VAT">{(tariff.residential.current[meterType].elec.twoRate.night * 100).toFixed(4)}p per kWh</td>
                    <td>
                        £{EACCost.toFixed(2)}
                    </td>
                </tr>
            )
        }
    }

    gasCostInfo = () => {
        const standingCost = tariff.residential.current[meterType].gas.standing * 365
        const EACCost = tariff.residential.current[meterType].gas.oneRate * EACS["Gas"]
        totalCost.push(EACCost, standingCost)
        return (
            <div className="ui segment">
                <div className="ui header">
                    {meterType.charAt(0).toUpperCase() + meterType.slice(1)} Gas
                    </div>
                <table className="ui very basic celled table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>excl. VAT</th>
                            <th>incl. VAT</th>
                            <th>EAC Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Unit Rate"><b>Unit Rate</b></td>
                            <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].gas.oneRate * 100).toFixed(4)}p per kWh</td>
                            <td data-label="Energy Cost">{(tariff.residential.current[meterType].gas.oneRate * 100).toFixed(4)}p per kWh</td>
                            <td>£{EACCost.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td data-label="Unit Rate"><b>Standing Charge</b></td>
                            <td data-label="Energy Cost">{exclVAT(tariff.residential.current[meterType].gas.standing * 100).toFixed(3)}p per day
                                </td>
                            <td data-label="Energy Cost">{(tariff.residential.current[meterType].gas.standing * 100).toFixed(3)}p per day
                                </td>
                            <td> £{(tariff.residential.current[meterType].gas.standing * 365).toFixed(2)} per year
                                </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            {meterPoint.map((element, i) => (
                <div key={element} className="ui segment" style={{ marginBottom: "10px" }}>
                    <div className="ui header">
                        SSC {SSC[i] + " "}
                        {meterType.charAt(0).toUpperCase() + meterType.slice(1) + " "}
                        {meterRate[i]}
                    </div>
                    <table className="ui very basic celled table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>excl. VAT</th>
                                <th>incl. VAT</th>
                                <th>EAC Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elecCostInfo(i)}
                            {meterPoint[i] === "First" ?
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
            ))}

            {energyType === true ?
                gasCostInfo()
                : null}

            {totalCost.reduce((a, b) => a + b, 0) > 0 ?
                < div className="ui segment">
                    <div className="ui header">
                        Total Quote
                    </div>
                    <table className="ui very basic celled table" >
                        <thead>
                            <tr>
                                <th>Daily</th>
                                <th>Monthly</th>
                                <th>Yearly</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Daily Total Cost"><b>£{(totalCost.reduce((a, b) => a + b, 0) / 365).toFixed(2)}</b></td>
                                <td data-label="Monthly Total Cost"><b>£{(totalCost.reduce((a, b) => a + b, 0) / 12).toFixed(2)}</b></td>
                                <td data-label="Yearly Total Cost"><b>£{totalCost.reduce((a, b) => a + b, 0).toFixed(2)}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                : null}
        </div >
    );
};