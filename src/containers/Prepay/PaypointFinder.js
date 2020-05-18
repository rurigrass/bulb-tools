import React, { Component } from 'react';

import { NumberInput } from "../../components/ReusableComponents/Postcode";
import { Dropdown } from "../../components/ReusableComponents/Dropdowns";

// import PayzoneSites from "../../"

class PaypointFinder extends Component {

    state = {
        searchParam: "SSC",
        SSC: [],
        agreement: []
    }

    render() {
        return (
            <div style={{ maxWidth: "500px", margin: "auto", marginBottom: "10px" }}>
                <div className="ui container">
                    <h1 style={{ textAlign: "center", color: "white" }}>PayPoint Finder</h1>
                    <div className="ui segment" style={{ display: "flex" }}>
                        <Dropdown
                            changeFn={e => { this.setState({ searchParam: e.target.value }) }}
                            options={[
                                { key: 'SSC', value: 'SSC', text: 'SSC' },
                                { key: 'TPR', value: 'TPR', text: 'TPR' },
                            ]} />
                        <NumberInput
                            searchParam={this.state.searchParam}
                            // InputFn={e => { this.findSSC(e.target.value) }} 
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default PaypointFinder;