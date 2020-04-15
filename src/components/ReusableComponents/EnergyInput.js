import React from "react";

const EnergyInput = props => {
  return (
    <div className="ui right labeled input" style={{ marginTop: "10px" }}>
      {props.readingType === "first" ? (
        <div>
          <input
            type="number"
            max="999999"
            placeholder="First Reading"
            onChange={props.energyAmount}
          />
          <input type="date" onChange={props.readingDate} />
        </div>
      ) : (
        <div>
          <input
            type="number"
            max="999999"
            placeholder="Second Reading"
            onChange={props.energyAmount}
          />
          <input type="date" onChange={props.readingDate} />
        </div>
      )}
      {props.energyType === "Electricity" ? (
        <div className="ui basic label">kWh</div>
      ) : (
        <div className="ui basic label">m³</div>
      )}
    </div>
  );
};

export default EnergyInput;