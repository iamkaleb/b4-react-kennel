import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from "./animal/AnimalForm";
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/animals" render={props => {
        if (hasUser) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route 
        exact
        path="/animals/:animalId(\d+)" 
        render={(props) => {
        return (
          <AnimalDetail 
            animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
        );
      }}         
      />
      <Route path="/animals/new" render={(props) => {
        return <AnimalForm {...props} />
      }} 
      />
      <Route 
        exact 
        path="/locations" 
        render={props => {
            return <LocationList {...props} />
      }} />
      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={(props) => {
        return ( 
          <LocationDetail
            locationId={parseInt(props.match.params.locationId)}
            {...props}
        />
        );
        }}
      />
      <Route 
        exact 
        path="/owners" 
        render={props => {
          if (hasUser) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} />
      <Route 
        exact 
        path="/employees" 
        render={props => {
          if (hasUser) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} />
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          if (hasUser) {
            return <EmployeeWithAnimals {...props} />
          } else {
            return <Redirect to="/login" />
          }
      }} />
      <Route path="/animals/:animalId(\d+)/edit" render={props => {
        if (hasUser) {
          return <AnimalEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/login" render={props => {
        return <Login setUser={setUser} {...props} />
      }} />
    </React.Fragment>
  );
};

export default ApplicationViews;