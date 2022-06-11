import React, { useContext, useState, useEffect } from "react";
import Card from "../component/Card";
import "../../styles/home.css"
export const Planets = () => {
	const [lista, setlista] = useState([]);

	const urlApi = "https://www.swapi.tech/api/planets"
	useEffect(() => {
		getTask(urlApi);
	}, []);

	const getTask = (url) => {
		fetch(url)
			.then((Response) => Response.json())
			.then((data) => {
				console.log(data);
				setlista(data);
			})
			.catch((error) => console.log(error));
	};

	let peopleList = lista.results?.map((tastk, index) => {
		return (
			<div className="col-2 p-2" key={tastk.uid}>
				<Card
				img="https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png"
				title={tastk.name}
				text={tastk.description_1}
				linkbtn={"/planets/" + tastk.uid}
				textbtn="learn more"
			/>
			</div>
		);
	});

	return (
		<>
			<h1 className="title text-center">Planets of Star Wars</h1>
			<div className=" container-fluid p-2 container_people row scrolling-wrapper ">
				{peopleList}
			</div>


		</>
	);
};
