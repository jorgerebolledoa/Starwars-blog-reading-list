import React, { useContext, useState, useEffect } from "react";
import Card from "../component/Card";
import "../../styles/home.css"
import { Context } from "../store/appContext";
export const People = () => {
	const { store, actions } = useContext(Context);
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
			<div className="col-2 p-2" key={tastk.uid}>
				<div className="card">
					<img src="https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png" className="card-img-top" />
					<div className="card-body">
						<h5 className="card-title">{tastk.name} </h5>
						<p className="card-text">{tastk.description_1}</p>
						<a href={"/peoples/" + tastk.uid} className="btn btn-primary">
							learn more
						</a>
						<small className="text-muted float-end"><i className={store.favorite.includes(tastk.name) ? "far fa-star" : "far fa-star"} onClick={() => actions.addFavorite(tastk.name)}></i></small>
					</div>
				</div>
			</div>
		);
	});
	return (
		<>
			<h1 className="title text-center">Characters of Star Wars</h1>
			<div className=" container-fluid p-2 container_people row scrolling-wrapper ">
				{peopleList}
			</div>


		</>
	);
};
