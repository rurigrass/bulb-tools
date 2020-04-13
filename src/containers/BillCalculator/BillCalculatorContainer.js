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

        console.log(info.tariff.current.credit.gas);
        
        const energyTotal = info.secondEnergyAmount - info.firstEnergyAmount;
        // const timeAmount = info.secondReadingDate - info.firstReadingDate;
        // const daysTotal = Math.floor(timeAmount / 86400);
        // console.log(format("dd/MM/yyyy", info.secondReadingDate));
    
        const daysTotal = differenceInDays(info.secondReadingDate, info.firstReadingDate);
        let unitTotal, standingTotal, priceTotal;
        //CALCULATE STANDING CHARGE
        const longResult = daysTotal * 0.204435;
        standingTotal = longResult;
        //CALC UNIT CHARGE ELEC
        if (info.energyType === "Electricity") {
          const longResult = energyTotal * info.tariff.current.credit.elec.oneRate;
          unitTotal = longResult;
        } else {
          //CALC UNIT CHARGE GAS
          const byVCF = energyTotal * 1.02264 * 40;
          const byCV = byVCF / 3.6;
          const kWHCF = byCV * info.tariff.current.credit.gas;
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
            <div className="ui container" style={{ marginTop: "-20px" }}>
              <h1 style={{ textAlign: "center" }}>Energy Price Calculator</h1>
              <BillCalculator onSubmit={this.calculateResult} />
              {calculatorResult}
            </div>
          </div>
        );
      }
}

export default BillCalculatorContainer;