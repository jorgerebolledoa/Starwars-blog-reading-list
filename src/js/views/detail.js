import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/Card";
export const Detail = () => {
  const { uid } = useParams();

  useEffect(() => { }, []);
  
  const [lista, setlista] = useState([]);

	const urlApi = "https://www.swapi.tech/api/planets/" +uid
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
				text={tastk.description}
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
}