import React from "react";

const EnergyInput = props => {


  // const rates = ["Day", "Night"];
  let inputs, rates

  if (props.energyType === "Electricity" && props.meterRate === "twoRate") {
    rates = ["Day", "Night"]
  } else {
    rates = ["Day"]
  }

  inputs = rates.map(rate => {
    return (
      <input
        key={rate}
        name={"EnergyAmount" + rate}
        type="number"
        max="999999"
        placeholder={props.readingType + " Reading " + (props.energyType === "Electricity" && props.meterRate === "twoRate" ? rate : "")}
        onChange={props.energyAmount}
      />
    )
  })

  return (
    <div className="ui right labeled input" style={{ marginTop: "10px" }}>
      <div>
        {inputs}
        <input type="date" onChange={props.readingDate} />
      </div>
      {props.energyType === "Electricity" ? (
        <div className="ui basic label">kWh</div>
      ) : (
          <div className="ui basic label">m³</div>
        )}
    </div>
  );
}
  ;

export default EnergyInput;