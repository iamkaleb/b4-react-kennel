import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./owner.jpg")} alt="The Owner" />
        </picture>
        <h3>
          Owner: <span className="card-ownername">
            {props.owner.name}
          </span>
        </h3>
        <p>Phone number: {props.owner.phoneNumber}</p>
        <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Discharge</button>
      </div>
    </div>
  );
};

export default OwnerCard;