import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.jpg")} alt="The Owner" />
        </picture>
        <h3>
          Owner: <span className="card-ownername">Vladmir</span>
        </h3>
      </div>
    </div>
  );
};

export default OwnerCard;