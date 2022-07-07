import React, { useContext, useState, useEffect } from "react";
import Card from "../component/Card";
import "../../styles/home.css"
import { People } from "../component/map_people";
import { Planets } from "../component/map_planets";
import { Starships } from "../component/map_starships";
export const Home = () => {
	
	return (
		<>
		<People/>
		<Planets/>
		<Starships/>
		</>
	);
};
