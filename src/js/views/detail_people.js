import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PeopleDetail = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const name = store.singlePeople?.result.properties.name
  const height = store.singlePeople?.result.properties.height
  const mass = store.singlePeople?.result.properties.mass
  const hair_color = store.singlePeople?.result.properties.hair_color
  const skin_color = store.singlePeople?.result.properties.skin_color
  const eye_color = store.singlePeople?.result.properties.eye_color
  const birth_year = store.singlePeople?.result.properties.birth_year
  const gender = store.singlePeople?.result.properties.gender

  useEffect(() => {
    actions.getSinglePeople(params.uid);
  }, []);
  return (
    <>
      <h1 className="title text-center">
        {store.singlePeople?.result.properties.name}
      </h1>
      <div className="itemDescription">
          <p className="card paragraph">
            name: {name} <br></br>
            height: {height}<br></br>
            mass: {mass}<br></br>
            hair color: {hair_color}<br></br>
            skin color: {skin_color}<br></br>
            eyes color: {eye_color}<br></br>
            birth year: {birth_year}<br></br>
            gender: {gender}
            </p>
      </div>
    </>
  );
};