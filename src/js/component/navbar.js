import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css"
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar text-secondary sticky-top">
			<div className="container_icon ">
				<a href="https://www.facebook.com/"><i className="fab fa-facebook-f nav_icon"></i></a>
				<a href="https://twitter.com/home"><i className="fab fa-twitter nav_icon"></i></a>
				<a href="https://www.instagram.com/"><i className="fab fa-instagram nav_icon"></i></a>
				<a href="https://www.youtube.com/"><i className="fa-brands fa-youtube nav_icon"></i></a>

			</div>
			<Link to="/">
				<img className="float-center img_st" src="https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png">
				</img>
			</Link>
			<div className="dropdown m-5">
				<button className="btn btn-dark text-warning dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites {store.favorite.length}
				</button>
				<ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
				
				{!!store.favorite.length !== 0 &&
				store.favorite.map((valor, index) => {
					return (
						<li>
							<a key={index} className="dropdown-item text-warning ">
							{valor}
							<i
								className="far fa-trash-alt float-end text-danger"
								onClick={() => actions.deleteFavorite(valor)}
							></i>
						</a>
						</li>
						
					);
				})}
		
				</ul>
			</div>
		
		</nav>
	);
};
