import React from "react";

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.jpg")} alt="Employee" />
        </picture>
        <h3>
          Employee: <span className="card-employeename">
          {props.employee.name}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;