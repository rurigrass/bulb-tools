import React from "react";

const EnergyInput = props => {

  console.log(props);
  

  const rates = ["Day", "Night"];
  let inputs

  if (props.energyType === "Electricity" && props.meterRate === "twoRate") {
    inputs = rates.map(rate => {
      console.log(rate)
      return (
        <input
          key={rate}
          type="number"
          max="999999"
          placeholder={props.readingType + " Reading " + rate}
          onChange={props.energyAmount}
        />
      )
    })
  } else {
    inputs =
      <input
        type="number"
        max="999999"
        placeholder={props.readingType + " Reading"}
        onChange={props.energyAmount}
      />
  };

  return (
    <div className="ui right labeled input" style={{ marginTop: "10px" }}>
      <div>
        {inputs}
        <input type="date" onChange={props.readingDate} />
      </div>
      {/* <div>
        <input
          type="number"
          max="999999"
          placeholder={props.readingType + " Reading"}
          onChange={props.energyAmount}
        />
        <input type="date" onChange={props.readingDate} />
      </div> */}
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