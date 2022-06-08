import React, { useContext, useState, useEffect } from "react";
import Card from "../component/Card";
import "../../styles/home.css"
export const Home = () => {
	const [lista, setlista] = useState([]);

	const urlApi = "https://www.swapi.tech/api/people"
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
			<div key={tastk.uid} className="container ">
				<div class="columms align-items-center">
					<div class="col-3">
						<Card
							img="https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png"
							title={tastk.name}
							text={tastk.description_1}
							linkbtn={"/producto/" + tastk.id}
							textbtn="learn more"
						/>
					</div>
				</div>
			</div>

		);
	});

	return (
		<>
			<h1 className="title text-center">Characters of Star Wars</h1>
			<div className="planetsContainer animate__animated animate__fadeInRightBig">
				{peopleList}
			</div>


		</>
	);
};
