import React, { Component } from 'react';

import { NumberInput } from "../../components/ReusableComponents/Postcode";
import { Dropdown } from "../../components/ReusableComponents/Dropdowns";
import SSCFinderResult from "../../components/SSCFinderResult/SSCFinderResult";

import TPRBySSC from "../../data/TPRBySSC";
import AgreementsBySSC from "../../data/AgreementsBySSC";


class SSCFinder extends Component {

    state = {
        searchParam: "SSC",
        SSC: [],
        agreement: []
    }

    findSSC = number => {
        let TPR, agreement = [], SSC = []
        if (this.state.searchParam === "SSC") {
            SSC.push(TPRBySSC.filter(e => e.ssc === Number(number)));
            agreement.push(AgreementsBySSC.filter(e => e.ssc === Number(number)));
            this.setState({ SSC, agreement })
        } else {
            TPR = TPRBySSC.filter(e => e.tpr === Number(number));
            TPR.forEach(e => {
                SSC.push(TPRBySSC.filter(x => x.ssc === e.ssc))
                agreement.push(AgreementsBySSC.filter(x => x.ssc === e.ssc))
            });
            this.setState({ SSC, agreement })
        }
    }

    render() {

        let sscFinderResults = []

        for (let i = 0; i < this.state.SSC.length; i++) {
            sscFinderResults.push(
                <SSCFinderResult key={i} SSC={this.state.SSC[i]} agreement={this.state.agreement[i]} />)
        }

        return (
            <div style={{ maxWidth: "500px", margin: "auto", marginBottom: "10px" }}>
                <div className="ui container">
                    <h1 style={{ textAlign: "center", color: "white" }}>SSC/TPR Finder</h1>
                    <div className="ui segment" style={{ display: "flex" }}>
                        <Dropdown
                            changeFn={e => { this.setState({ searchParam: e.target.value }) }}
                            options={[
                                { key: 'SSC', value: 'SSC', text: 'SSC' },
                                { key: 'TPR', value: 'TPR', text: 'TPR' },
                            ]} />
                        <NumberInput
                            searchParam={this.state.searchParam}
                            InputFn={e => { this.findSSC(e.target.value) }} />
                    </div>
                    {sscFinderResults}
                </div>
            </div>
        );
    }
}

export default SSCFinder;