import React from "react";
import AnimalCard from "./animal/AnimalCard";
import OwnerCard from "./owner/OwnerCard";
import EmployeeCard from "./employee/EmployeeCard";
import LocationCard from "./location/LocationCard";
import "./Kennel.css";

const Kennel = () => {
  return (
    <div>
        <div>
            <h2>
                Student Kennels
                <br />
                <small>Loving care when you're not there.</small>
            </h2>
            <address>
                Visit Us at the Nashville North Location
                <br />
                500 Puppy Way
            </address>
        </div>
        <div className="container-cards">
            <OwnerCard />
            <EmployeeCard />
            <LocationCard />
            <AnimalCard />
        </div>
    </div>
  );
};

export default Kennel;