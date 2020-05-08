import React from 'react';

const SSCFinderResult = (props) => {

    const { SSC, agreement } = props;

    console.log(props.agreement);

    let SSCInfo = SSC.map(e => {
        return (
            <div key={e.tpr} style={{ "marginTop": "10px" }}>
                <table className="ui very basic collapsing celled table">
                    <tbody>
                        <tr>
                            <td data-label="TPR">TPR</td>
                            <td data-label="TPR"><b>{e.tpr}</b></td>
                        </tr>
                        <tr>
                            <td data-label="Rate">Rate</td>
                            <td data-label="Rate">{e.name}</td>
                        </tr>
                        <tr>
                            <td data-label="Times">Times</td>
                            <td data-label="Times">{e.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div >
        )
    })

    return (
        <div>
            {SSC.length > 0 ?
                <div className="ui segment">
                    <div className="ui header">
                        SSC {SSC[0].ssc} Agreement: {agreement[0].agreement} {console.log(typeof agreement.agreement)}
                    </div>
                    {SSCInfo}
                </div>
                : <div className="ui red inverted segment">
                    <div className="ui header">
                        Invalid SSC
                    </div>
                </div>
            }
        </div>
    );
};

export default SSCFinderResult;