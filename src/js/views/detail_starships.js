import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetails = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const name = store.singleVehicle?.result.properties.name
  const model = store.singleVehicle?.result.properties.model
  const vehicle_class = store.singleVehicle?.result.properties.vehicle_class
  const manufacturer = store.singleVehicle?.result.properties.manufacturer
  const cost_in_credits = store.singleVehicle?.result.properties.cost_in_credits
  const length = store.singleVehicle?.result.properties.length
  const crew = store.singleVehicle?.result.properties.crew
  const passengers = store.singleVehicle?.result.properties.passengers
  const cargo_capacity = store.singleVehicle?.result.properties.cargo_capacity
  useEffect(() => {
    actions.getSingleVehicle(params.uid);
  }, []);
  
  return (
    <>
      <h1 className="title text-center">
        {store.singleVehicle?.result.properties.name}
      </h1>
      <div className="itemDescription">
          <p className="card paragraph">{name}, model: {model} is a {vehicle_class} class ship, his lenght is {length}''. <br /> 
          The ship costs $ {cost_in_credits} and the manufacturer is {manufacturer}. <br />
          <hr />
          <h2>Capacity:</h2> <br />
        crew: {crew}. <br />
        passengers: {passengers}. <br />
        Cargo: {cargo_capacity}. <br />
          </p>
      </div>
      
    </>
  );
};