import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./kennel.jpg")} alt="Kennel" />
        </picture>
        <h3>
          Kennel: <span className="card-kennelename">KennelCraft</span>
        </h3>
      </div>
    </div>
  );
};

export default LocationCard;