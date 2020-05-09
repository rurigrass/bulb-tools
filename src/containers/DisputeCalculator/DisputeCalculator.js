import React, { Component } from 'react';

import RadioGroup from '../../components/ReusableComponents/RadioGroup';
import EnergyInput from '../../components/ReusableComponents/EnergyInput';
import NextStatementDateInput from '../../components/ReusableComponents/NextStatementDateInput';
import DisputeCalculatorResult from '../../components/DisputeCalculator/DisputeCalculatorResult'

import differenceInDays from "date-fns/differenceInDays"

class DisputeCalculator extends Component {

    state = {
        energyType: "Electricity",
        meterRate: "oneRate",
        firstEnergyAmountDay: null,
        firstEnergyAmountNight: null,
        firstReadingDate: null,
        secondEnergyAmountDay: null,
        secondEnergyAmountNight: null,
        secondReadingDate: null,
        nextStatementDate: null,
        disputeReadingDay: null,
        disputeReadingNight: null,
        energyTotalOneDayDay: null,
        energyTotalOneDayNight: null,
    }


    onFormSubmit = event => {
        event.preventDefault();
        let rates

        if (this.state.energyType === "Electricity" && this.state.meterRate === "twoRate") {
            rates = ["Day", "Night"]
        } else {
            rates = ["Day"]
            this.setState({
                meterRate: "oneRate",
                disputeReadingNight: null
            })
        }

        rates.forEach(rate => {
            //second read minus first read
            const energyTotal = this.state["secondEnergyAmount" + rate] - this.state["firstEnergyAmount" + rate];
            //difference in days
            const daysTotal = differenceInDays(this.state.secondReadingDate, this.state.firstReadingDate);
            //energy total 1 day
            const energyTotalOneDay = energyTotal / daysTotal;
            if (this.state.firstReadingDate < this.state.secondReadingDate && this.state.secondReadingDate < this.state.nextStatementDate) {
                //days til dispute date
                const daysUntilDispute = differenceInDays(this.state.nextStatementDate, this.state.secondReadingDate);
                //total energy use until dispute date
                const energyTotalUntilDispute = energyTotalOneDay * daysUntilDispute;
                //sencond read + energyTotal until dispute
                const disputeReading = +this.state["secondEnergyAmount" + rate] + energyTotalUntilDispute;
                this.setState({
                    ["disputeReading" + rate]: disputeReading,
                    ["energyTotalOneDay" + rate]: energyTotalOneDay
                })
            } else if (this.state.firstReadingDate < this.state.secondReadingDate && this.state.firstReadingDate > this.state.nextStatementDate) {
                //days from dispute date
                const daysSinceDispute = differenceInDays(this.state.firstReadingDate, this.state.nextStatementDate);
                //total energy use from dispute date
                const energyTotalSinceDispute = energyTotalOneDay * daysSinceDispute;
                //first read - energyTotal from dispute
                const disputeReading = +this.state["firstEnergyAmount" + rate] - energyTotalSinceDispute;
                this.setState({
                    ["disputeReading" + rate]: disputeReading,
                    ["energyTotalOneDay" + rate]: energyTotalOneDay
                })
            } else {
                const disputeReading = 0
                this.setState({
                    ["disputeReading" + rate]: disputeReading,
                    ["energyTotalOneDay" + rate]: energyTotalOneDay
                })
            }
        })
    };
    render() {

        // this.state.disputeReading ? console.log("true") : console.log("false");

        return (
            <div style={{ maxWidth: "500px", margin: "auto" }}>
                <div className="ui container">
                    <h1 style={{ textAlign: "center", color: "white" }}>Dispute Calculator</h1>
                    <div className="ui compact segment">
                        <form onSubmit={this.onFormSubmit} className="ui form">
                            <RadioGroup
                                name="Fuel Type"
                                changeFn={e => {
                                    this.setState({ energyType: e.target.name });
                                }}
                                options={["Electricity", "Gas"]}
                                selectedOption={this.state.energyType}
                            />
                            {this.state.energyType === "Electricity" ? (
                                <RadioGroup
                                    name="Meter Rate"
                                    changeFn={e => {
                                        this.setState({ meterRate: e.target.name });
                                    }}
                                    options={["oneRate", "twoRate"]}
                                    selectedOption={this.state.meterRate}
                                />) : (<div></div>)}
                            Earlier Reading
                            <EnergyInput
                                energyAmount={e => {
                                    this.setState({ ["first" + e.target.name]: e.target.value });
                                }}
                                readingDate={e => {
                                    const firstReadingDate = new Date(`${e.target.value}`);
                                    this.setState({ firstReadingDate });
                                }}
                                energyType={this.state.energyType}
                                meterRate={this.state.meterRate}
                                readingType="First"
                            />
                            <br />
                            <br />
                            Later Reading
                            <EnergyInput
                                energyAmount={e => {
                                    this.setState({ ["second" + e.target.name]: e.target.value });
                                }}
                                readingDate={e => {
                                    const secondReadingDate = new Date(`${e.target.value}`);
                                    this.setState({ secondReadingDate });
                                }}
                                energyType={this.state.energyType}
                                meterRate={this.state.meterRate}
                                readingType="Second"
                            />
                            <br />
                            <br />
                            Switch Supply Date
                            <NextStatementDateInput
                                statementDate={e => {
                                    const nextStatementDate = new Date(`${e.target.value}`)
                                    this.setState({ nextStatementDate });
                                }}
                            />
                            <br />
                            <br />
                            <button
                                className="ui green button"
                                style={{ float: "right" }}
                                onClick={this.onFormSubmit}
                            >
                                Calculate
                        </button>
                        </form>
                    </div>
                </div>
                <div>
                    {this.state.disputeReadingDay ? <DisputeCalculatorResult
                        disputeReadingDay={this.state.disputeReadingDay}
                        disputeReadingNight={this.state.disputeReadingNight}
                        energyType={this.state.energyType}
                        disputeDate={this.state.nextStatementDate}
                        energyOneDay={this.state.energyTotalOneDayDay}
                        energyOneNight={this.state.energyTotalOneDayNight}
                    /> : null}
                </div>
            </div>
        );
    }
}

export default DisputeCalculator;