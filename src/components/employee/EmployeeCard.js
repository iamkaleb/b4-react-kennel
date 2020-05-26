import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./employee.jpg")} alt="Employee" />
        </picture>
        <h3>
          Employee: <span className="card-employeename">Sheldon</span>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;