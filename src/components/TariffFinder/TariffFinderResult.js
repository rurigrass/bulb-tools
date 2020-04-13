import React from 'react';

const TariffFinderResult = (props) => {

    const standingCharge = null

    console.log(props.info);
    



    

    return (
        <div className="ui segment">
            <table className="ui very basic collapsing celled table">
                <tbody>
                    <tr>
                        <td data-label="Unit Rate">Unit Rate</td>
                        <td data-label="Energy Cost">{}</td>
                    </tr>
                    <tr>
                        <td data-label="Unit Rate">Standing Charge</td>
                        <td data-label="Energy Cost">£ 2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TariffFinderResult;