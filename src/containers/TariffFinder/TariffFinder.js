import React, { Component } from 'react';

import { Postcode } from "../../components/ReusableComponents/Postcode";
import RadioGroup from "../../components/ReusableComponents/RadioGroup";
import TariffFinderResult from "../../components/TariffFinder/TariffFinderResult";

import RegionByPostcode from "../../data/RegionByPostcode";
import TariffsByRegion from "../../data/TariffsByRegion";

class TariffFinder extends Component {

    state = {
        energyType: "Electricity",
        meterType: "credit",
        meterRate: "1 rate",
        tariff: null
    }

    filterPostcode = info => {
        info = info.replace(/\s/g, '').toUpperCase()
        const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
        if (postcodeRegEx.test(info)) {
            info = info.slice(0, -3)

            const GSP = RegionByPostcode[info] && RegionByPostcode[info].GSP
            // TODO validate that GSP exists and show error if not

            const tariff = TariffsByRegion[GSP]
            // TODO validate that we have the tariff and show error if we don't

            this.setState({ tariff })
        } else {

        }
    }

    render() {
        console.log(this.state);


        return (
            <div style={{ maxWidth: "400px", margin: "auto" }}>
                <div className="ui container">
                    <h1 style={{ textAlign: "center", color: "white" }}>Tariff Finder</h1>
                    <div className="ui segment">
                        <Postcode
                            //brings back the postcode inputted 
                            regionFn={e => { this.filterPostcode(e.target.value) }}
                        />
                        <RadioGroup
                            // name="Fuel Type"
                            changeFn={e => {
                                this.setState({ meterType: e.target.name });
                            }}
                            options={["credit", "prepay"]}
                            selectedOption={this.state.meterType}
                        />
                        <RadioGroup
                            // name="Fuel Type"
                            changeFn={e => {
                                this.setState({ meterRate: e.target.name });
                            }}
                            options={["1 rate", "2 rate"]}
                            selectedOption={this.state.meterRate}
                        />
                    </div>
                    {this.state.tariff ? <TariffFinderResult
                        tariff={this.state.tariff}
                        meterType={this.state.meterType}
                        meterRate={this.state.meterRate}
                    /> : null}
                </div>
            </div>
        );
    }
}

export default TariffFinder;