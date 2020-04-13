import React from "react";

const CalculatorResult = props => {


  return (
    <div>
      <div className="ui segment">
        Current {props.energyType} cost for {props.daysTotal} days
    <br />
        <table className="ui very basic collapsing celled table">
          <thead>
            <tr>
              <th>Usage</th>
              <th>Energy Cost</th>
              <th>Standing Charge</th>
              <th>Total</th>
            </tr></thead>
          <tbody>
            <tr>
              <td data-label="Usage">{props.energyTotal}</td>
              <td data-label="Energy Cost">£ {props.unitTotal.toFixed(2)}</td>
              <td data-label="Standing Charge">£ {props.standingTotal.toFixed(2)}</td>
              <td data-label="Total">£ {props.priceTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ui segment">
        Estimated cost of {props.energyType} at statement date
    <br />
        <table className="ui very basic collapsing celled table">
          <thead>
            <tr>
              <th>Usage</th>
              <th>Energy Cost</th>
              <th>Standing Charge</th>
              <th>Total</th>
            </tr></thead>
          <tbody>
            <tr>
              <td data-label="Usage">
                {props.nextStatementEnergyTotal.toFixed(0)}
              </td>
              <td data-label="Energy Cost">
                £ {props.nextStatementUnitTotal.toFixed(2)}
              </td>
              <td data-label="Standing Charge">
                £ {props.nextStatementStandingTotal.toFixed(2)}
              </td>
              <td data-label="Total">
                £ {props.nextStatementPriceTotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalculatorResult;
