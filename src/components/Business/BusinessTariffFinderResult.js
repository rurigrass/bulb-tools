import React from 'react';

const BusinessTariffFinderResult = (props) => {

    const { tariff } = props;

    return (
        <div>
            <div className="ui segment">
                <div className="ui header">
                    Electricity
                </div>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                        <tr>
                            <td data-label="Unit Rate"><b>Unit Rate</b></td>
                            <td data-label="Energy Cost">{(tariff.business.current.credit.elec.oneRate * 100).toFixed(2)}p per kWh</td>
                        </tr>
                        <tr>
                            <td data-label="Unit Rate"><b>Standing Charge</b></td>
                            <td data-label="Energy Cost">{(tariff.business.current.credit.elec.standing * 100).toFixed(2)}p per day (£{(tariff.business.current.credit.elec.standing * 365).toFixed(2)} per year)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="ui segment">
                <div className="ui header">
                    Gas
                </div>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                        <tr>
                            <td data-label="Unit Rate"><b>Unit Rate</b></td>
                            <td data-label="Energy Cost">{(tariff.business.current.credit.gas.oneRate * 100).toFixed(2)}p per kWh</td>
                        </tr>
                        <tr>
                            <td data-label="Unit Rate"><b>Standing Charge</b></td>
                            <td data-label="Energy Cost">{(tariff.business.current.credit.gas.standing * 100).toFixed(2)}p per day (£{(tariff.business.current.credit.elec.standing * 365).toFixed(2)} per year)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BusinessTariffFinderResult;