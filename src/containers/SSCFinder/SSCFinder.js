import React, { Component } from 'react';

import { NumberInput } from "../../components/ReusableComponents/Postcode";
import SSCFinderResult from "../../components/SSCFinderResult/SSCFinderResult";

import TPRBySSC from "../../data/TPRBySSC";
import AgreementsBySSC from "../../data/AgreementsBySSC";


class SSCFinder extends Component {

    state = {
        SSC: null,
        agreement: null
    }

    findSSC = number => {
        const SSC = TPRBySSC.filter(e => e.ssc === Number(number));
        const agreement = AgreementsBySSC.filter(e => e.ssc === Number(number))
        this.setState({ SSC, agreement })
    }
    render() {
        return (
            <div style={{ maxWidth: "500px", margin: "auto", marginBottom:"10px" }}>
                <div className="ui container">
                    <h1 style={{ textAlign: "center", color: "white" }}>SSC Finder</h1>
                    <div className="ui segment">
                        <NumberInput InputFn={e => { this.findSSC(e.target.value) }} />
                    </div>
                    {this.state.SSC ? <SSCFinderResult SSC={this.state.SSC} agreement={this.state.agreement} /> : null}
                </div>
            </div>
        );
    }
}

export default SSCFinder;