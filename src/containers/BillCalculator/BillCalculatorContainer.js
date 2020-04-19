import React, { Component } from 'react';
import BillCalculator from "../../components/BillCalculator/BillCalculator";
import CalculatorResult from "../../components/BillCalculator/CalculatorResult";

import differenceInDays from "date-fns/differenceInDays"
import subMonths from 'date-fns/subMonths'

class BillCalculatorContainer extends Component {

  state = {
    energyType: null,
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

    console.log(info.tariff);

    const energyTotal = info.secondEnergyAmount - info.firstEnergyAmount;
    // const timeAmount = info.secondReadingDate - info.firstReadingDate;
    // const daysTotal = Math.floor(timeAmount / 86400);
    // console.log(format("dd/MM/yyyy", info.secondReadingDate));

    const daysTotal = differenceInDays(info.secondReadingDate, info.firstReadingDate);
    let unitTotal, standingTotal, priceTotal;
    //CALCULATE STANDING CHARGE
    if (info.energyType === "Electricity") {
      const longResult = daysTotal * info.tariff.current.credit.elec.standing;
      standingTotal = longResult;
    } else {
      const longResult = daysTotal * info.tariff.current.credit.gas.standing;
      standingTotal = longResult;
    }
    //CALC UNIT CHARGE ELEC
    if (info.energyType === "Electricity") {
      const longResult = energyTotal * info.tariff.current.credit.elec.oneRate;
      unitTotal = longResult;
    } else {
      //CALC UNIT CHARGE GAS
      const byVCF = energyTotal * 1.02264 * 40;
      const byCV = byVCF / 3.6;
      const kWHCF = byCV * info.tariff.current.credit.gas.oneRate;
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

    console.log(this.state.unitTotal);


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
      <div style={{ maxWidth: "400px", margin: "auto" }}>
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