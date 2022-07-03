
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const name = store.singlePlanet?.result.properties.name
  const climate = store.singlePlanet?.result.properties.climate
  const diameter = store.singlePlanet?.result.properties.diameter
  const gravity = store.singlePlanet?.result.properties.gravity
  const population = store.singlePlanet?.result.properties.population
  const terrain = store.singlePlanet?.result.properties.terrain
  const orbitalPeriod = store.singlePlanet?.result.properties.orbital_period
  useEffect(() => {
    actions.getSinglePlanet(params.uid);
  }, []);
  // console.log(store.planets.results[0].name)
  return (
    <>
      <h1 className="title text-center">
        {store.singlePlanet?.result.properties.name}
      </h1>
      <div className="itemDescription">
          <p className="card paragraph">{name} is a planet with a population of {population} sentient habitants. <br /> With the terrain being mostly {terrain} and other tiny variations, the planet has a diameter of {diameter} kms, an orbital period of {orbitalPeriod} days and a gravity index of {gravity} units.<br /> The climate on this planet is {climate}, so make sure to plan your journey accordingly.</p>
      </div>
      
    </>
  );
};