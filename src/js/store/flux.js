const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			planets: [],
			vehicles: [],
			people: [],
			planetsData: [],
			favorite: [],
		},
		actions: {
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then((response) => response.json())
					.then((data) => data)
					.then(async (data) => {
						const { results } = data;
						results.forEach(async (planet, index) => {
							const resp = await fetch(planet.url);
							const info = await resp.json();
							data.results[index].info = info.result.properties;
							setStore({ planets: data });
						});
					});
			},
			getSinglePlanet: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ singlePlanet: data })
					});

			},


			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then((response) => response.json())
					.then((data) => data)
					.then(async (data) => {
						const { results } = data;
						results.forEach(async (vehicle, index) => {
							const resp = await fetch(vehicle.url);
							const info = await resp.json();
							data.results[index].info = info.result.properties;
							setStore({ vehicles: data });
						});
					});
			},
			getSingleVehicle: (id) => {
				fetch("https://www.swapi.tech/api/starships/" + id)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ singleVehicle: data })
					});

			},

			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
					.then((response) => response.json())
					.then((data) => data)
					.then(async (data) => {
						const { results } = data;
						results.forEach(async (people, index) => {
							const resp = await fetch(people.url);
							const info = await resp.json();
							data.results[index].info = info.result.properties;
							setStore({ people: data });
						});
					});
			},
			addFavorite: (personaje) => {
				if (getStore().favorite.includes(personaje)) {
					alert("Ya se encuentra en tus favoritos")
				} else {
					setStore({
						favorite: getStore().favorite.concat(personaje)

					})
					getActions().saveFav()
				}
			},

			deleteFavorite: (personaje) => {
				setStore({
					favorite: getStore().favorite.filter(fav => fav !== personaje)
				})
				getActions().saveFav()
			},
			saveFav: () => {
				localStorage.setItem('lista', JSON.stringify(getStore().favorite))
			},
		},
	};
};
export default getState;