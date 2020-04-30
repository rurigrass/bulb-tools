import React, { Component } from 'react';

import { Postcode } from "../../components/ReusableComponents/Postcode";
import BusinessTariffFinderResult from "../../components/Business/BusinessTariffFinderResult";

import RegionByPostcode from "../../data/RegionByPostcode";
import TariffsByRegion from "../../data/TariffsByRegion";

class BusinessTariffFinder extends Component {

    state = {
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
        return (
            <div style={{ maxWidth: "400px", margin: "auto" }}>
                <div className="ui container">
                    <h1 style={{ textAlign: "center", color: "white" }}>Business Tariff Finder</h1>
                    <div className="ui segment">
                        <Postcode
                            //brings back the postcode inputted 
                            regionFn={e => { this.filterPostcode(e.target.value) }}
                        />
                    </div>
                    {this.state.tariff ? <BusinessTariffFinderResult
                        tariff={this.state.tariff}
                    /> : null}
                </div>
            </div>
        );
    }
}

export default BusinessTariffFinder;