import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./kennel.jpg")} alt="Kennel" />
        </picture>
        <h3>
          Kennel: <span className="card-kennelename">
            {props.location.name}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;