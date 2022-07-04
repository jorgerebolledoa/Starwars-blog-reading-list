import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/nav.css"
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar  text-secondary">
			<div className="container_icon ">
				<a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>				
				<a href="https://twitter.com/home"><i className="fab fa-twitter"></i></a>
				<a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
				<a href="https://www.youtube.com/"><i className="fa-brands fa-youtube"></i></a>
				
			</div>
			<Link to="/">
				<img className="float-center img_st" src="https://seeklogo.com/images/S/Star_Wars-logo-B06952A462-seeklogo.com.png">
				</img>
			</Link>
			
			<button type="button" className="btn btn-dark text-warning ">Favorites  {store.favorite.length}</button>

            
           
			<form className="d-flex p-5" role="search">
				<input className="form-control me-2 bg-dark" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-warning" type="submit">Search</button>
			</form>
		</nav>
	);
};
