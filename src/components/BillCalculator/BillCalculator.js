import React, { Component } from 'react';

import RadioGroup from '../ReusableComponents/RadioGroup';
import { Postcode } from '../ReusableComponents/Postcode';
import EnergyInput from '../ReusableComponents/EnergyInput';
import NextStatementDateInput from "../ReusableComponents/NextStatementDateInput";

import RegionByPostcode from "../../data/RegionByPostcode";
import TariffsByRegion from "../../data/TariffsByRegion";

class BillCalculator extends Component {
  state = {
    meterType: "oneRate",
    energyType: "Electricity",
    firstEnergyAmount: null,
    firstReadingDate: null,
    secondEnergyAmount: null,
    secondReadingDate: null,
    nextStatementDate: null,
    tariff: null
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  filterPostcode = info => {
    info = info.replace(/\s/g, '').toUpperCase()
    const postcodeRegEx = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;
    if (postcodeRegEx.test(info)) {
      console.log(true);
      info = info.slice(0, -3)

      const GSP = RegionByPostcode[info] && RegionByPostcode[info].GSP
      // TODO validate that GSP exists and show error if not

      const tariff = TariffsByRegion[GSP]
      // TODO validate that we have the tariff and show error if we don't
      console.log(GSP);
      
      this.setState({tariff})
    } else {

    }
  }
  render() {

    // if (this.state.region.length > 6) {console.log("hi")} 
    // console.log(this.state.region);    


    return (
      <div className="ui compact segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <Postcode
            //brings back the postcode inputted 
            regionFn={e => { this.filterPostcode(e.target.value) }}
          />
          {/* <RadioGroup
            name="Meter Type"
            changeFn={e => {
              this.setState({ meterType: e.target.name });
            }}
            options={["oneRate", "twoRate"]}
            selectedOption={this.state.meterType}
          /> */}

          <RadioGroup
            name="Fuel Type"
            changeFn={e => {
              this.setState({ energyType: e.target.name });
            }}
            options={["Electricity", "Gas"]}
            selectedOption={this.state.energyType}
          />

          Previous reading
          <EnergyInput
            energyAmount={e => {
              this.setState({ firstEnergyAmount: e.target.value });
            }}
            readingDate={e => {
              const firstReadingDate = new Date(`${e.target.value}`);
              this.setState({ firstReadingDate });
            }}
            energyType={this.state.energyType}
            readingType="first"
          />
          <br />
          <br />
          New reading
          <EnergyInput
            energyAmount={e => {
              this.setState({ secondEnergyAmount: e.target.value });
            }}
            readingDate={e => {
              const secondReadingDate = new Date(`${e.target.value}`);
              this.setState({ secondReadingDate });
            }}
            energyType={this.state.energyType}
            readingType="second"
          />
          <br />
          <br />
          Next statement date (optional)
          <NextStatementDateInput
            statementDate={e => {
              const nextStatementDate = new Date(`${e.target.value}`)
              this.setState({ nextStatementDate });
            }}
          />
          <br /><br />
          <button
            className="ui green button"
            style={{ float: "right" }}
            onClick={this.onFormSubmit}
          >
            Calculate
          </button>
        </form>
      </div>
    );
  }
}

export default BillCalculator;