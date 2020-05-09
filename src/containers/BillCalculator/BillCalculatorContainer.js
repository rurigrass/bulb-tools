import React, { Component } from 'react';
import BillCalculator from "../../components/BillCalculator/BillCalculator";
import CalculatorResult from "../../components/BillCalculator/CalculatorResult";

import differenceInDays from "date-fns/differenceInDays"
import subMonths from 'date-fns/subMonths'

class BillCalculatorContainer extends Component {

  state = {
    meterType: null,
    energyType: null,
    meterRate: null,
    unitTotal: null,
    standingTotal: null,
    priceTotal: null,
    daysTotal: null,
    energyTotal: null,
    nextStatementDate: null,
    nextStatementUnitTotal: null,
    nextStatementStandingTotal: null,
    nextStatementEnergyTotal: null
  };
  calculateResult = info => {

    console.log(info);
    console.log(this.state.meterType);
    

    const energyTotal = info.secondEnergyAmountDay - info.firstEnergyAmountDay;
    // const timeAmount = info.secondReadingDate - info.firstReadingDate;
    // const daysTotal = Math.floor(timeAmount / 86400);
    // console.log(format("dd/MM/yyyy", info.secondReadingDate));

    const daysTotal = differenceInDays(info.secondReadingDate, info.firstReadingDate);
    let unitTotal, standingTotal, priceTotal;
    //CALCULATE STANDING CHARGE
    if (info.energyType === "Electricity") {
      const longResult = daysTotal * info.tariff.residential.current[info.meterType].elec.standing;
      standingTotal = longResult;
    } else {
      const longResult = daysTotal * info.tariff.residential.current[info.meterType].gas.standing;
      standingTotal = longResult;
    }
    //CALC UNIT CHARGE ELEC
    if (info.energyType === "Electricity") {
      const longResult = energyTotal * info.tariff.residential.current[info.meterType].elec.oneRate;
      unitTotal = longResult;
    } else {
      //CALC UNIT CHARGE GAS
      const byVCF = energyTotal * 1.02264 * 40;
      const byCV = byVCF / 3.6;
      const kWHCF = byCV * info.tariff.residential.current[info.meterType].gas.oneRate;
      unitTotal = kWHCF;
    }
    // console.log(unitTotal);
    // console.log(standingTotal);
    priceTotal = unitTotal + standingTotal;

    //NEXT STATEMENT
    const prevMonth = subMonths(info.nextStatementDate, 1);
    const daysInStatement = differenceInDays(info.nextStatementDate, prevMonth)

    const unitTotalOneDay = unitTotal / daysTotal;
    const nextStatementUnitTotal = unitTotalOneDay * daysInStatement

    const standingTotalOneDay = standingTotal / daysTotal;
    const nextStatementStandingTotal = standingTotalOneDay * daysInStatement;

    const nextStatementPriceTotal = nextStatementUnitTotal + nextStatementStandingTotal;

    const energyTotalOneDay = energyTotal / daysTotal;
    const nextStatementEnergyTotal = energyTotalOneDay * daysInStatement;

    this.setState({
      meterType: info.meterType,
      energyType: info.energyType,
      unitTotal,
      standingTotal,
      priceTotal,
      daysTotal,
      energyTotal,
      nextStatementDate: info.nextStatementDate,
      nextStatementUnitTotal,
      nextStatementStandingTotal,
      nextStatementPriceTotal,
      nextStatementEnergyTotal
    });
  };

  render() {

    let calculatorResult = null;
    if (this.state.unitTotal) {
      calculatorResult = (
        <CalculatorResult
          energyType={this.state.energyType}
          unitTotal={this.state.unitTotal}
          standingTotal={this.state.standingTotal}
          priceTotal={this.state.priceTotal}
          daysTotal={this.state.daysTotal}
          energyTotal={this.state.energyTotal}
          nextStatementUnitTotal={this.state.nextStatementUnitTotal}
          nextStatementStandingTotal={this.state.nextStatementStandingTotal}
          nextStatementPriceTotal={this.state.nextStatementPriceTotal}
          nextStatementEnergyTotal={this.state.nextStatementEnergyTotal}
        />
      );
    }

    return (
      <div style={{ maxWidth: "500px", margin: "auto" }}>
        <div className="ui container">
          <h1 style={{ textAlign: "center", color: "white" }}>Bill Calculator</h1>
          <BillCalculator onSubmit={this.calculateResult} />
          {calculatorResult}
        </div>
      </div>
    );
  }
}

export default BillCalculatorContainer;