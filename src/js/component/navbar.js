import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3 text-warning">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-warning m-2">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-warning m-2">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
