import React, { Component } from 'react';

import RadioGroup from '../../components/ReusableComponents/RadioGroup';
import { Postcode, NumberInput } from '../../components/ReusableComponents/Postcode';
import { SSCInput } from '../../components/ReusableComponents/SSCInput';
import { QuoteGeneratorResult } from '../../components/QuoteGenerator/QuoteGeneratorResult';

import RegionByPostcode from "../../data/RegionByPostcode";
import TariffsByRegion from "../../data/TariffsByRegion";
import AgreementsBySSC from "../../data/AgreementsBySSC";

class QuoteGenerator extends Component {

    state = {
        tariff: null,
        energyType: "Electricity",
        meterType: "credit",
        related: true,
        FirstSSC: null,
        SecondSSC: null,
        FirstSSCAgreement: null,
        SecondSSCAgreement: null,
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
            console.log(tariff);
            this.setState({ tariff })
        } else { }
    }

    findSSC = number => {
        const Agreement = AgreementsBySSC.filter(e => e.ssc === Number(number.value));
        // agreement.push(AgreementsBySSC.filter(e => e.ssc === Number(number)));
        // this.setState({ SSC, agreement })
        if (Agreement.length > 0) {
            // console.log(Agreement[0].agreement)
            this.setState({
                [number.name]: number.value,
                [number.name + "Agreement"]: Agreement[0].agreement
            })
        }
    }

    EACpush = number => {
        console.log(number);
    }

    agreementRate = agreement => {
        console.log("HELLO");

        let rates
        if (agreement === "1-rate for E7" || agreement === "2-rate") {
            rates = ["Day", "Night"]
        } else {
            rates = ["Day"]
        }
        return rates.map(rate => (
            <NumberInput
                searchParam={rate + " EAC"}
                InputFn={e => { this.EACpush(rate + e.target.value) }}
            />
        ))
    }


    render() {

        let meterPoint

        if (this.state.related === true) {
            meterPoint = ["First", "Second"]
        } else {
            meterPoint = ["First"]
        }

        return (
            <div style={{ maxWidth: "600px", margin: "auto", marginBottom: "10px" }}>
                <div className="ui container">
                    <h1 style={{ textAlign: "center", color: "white" }}>Quote Generator</h1>
                    <div className="ui segment">
                        <RadioGroup
                            selectedOption={this.state.meterType}
                            options={["credit", "prepay"]}
                            changeFn={e => {
                                this.setState({ meterType: e.target.name });
                            }}
                        />
                        <Postcode regionFn={e => { this.filterPostcode(e.target.value) }} />
                        {meterPoint.map(meter => (
                            <div key={meter}>
                                <SSCInput
                                    meterPoint={meter}
                                    label={"SSC"}
                                    searchParam={"SSC"}
                                    // related={this.state.related}
                                    InputFn={e => this.findSSC(e.target)}
                                    agreement={this.state[meter + "SSCAgreement"]}
                                />
                                {this.agreementRate(this.state[meter + "SSCAgreement"])}
                            </div>
                        ))}
                    </div>

                    {/* DISPLAY THE TARIFF */}
                    {this.state.tariff && this.state.FirstSSCAgreement && this.state.SecondSSCAgreement ?
                        <div>
                            <QuoteGeneratorResult
                                tariff={this.state.tariff}
                                meterType={this.state.meterType}
                                SSC={this.state.FirstSSC}
                                meterRate={this.state.FirstSSCAgreement}
                                meterPoint={"First"}
                            />
                            <QuoteGeneratorResult
                                tariff={this.state.tariff}
                                energyType={this.state.energyType}
                                meterType={this.state.meterType}
                                SSC={this.state.SecondSSC}
                                meterRate={this.state.SecondSSCAgreement}
                                meterPoint={"Second"}
                            />
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}

export default QuoteGenerator;