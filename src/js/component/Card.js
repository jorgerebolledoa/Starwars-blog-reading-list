import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
	return (
		<div className="card ">
			<img src={props.img} className="card-img-top" />
			<div className="card-body">
				<h5 className="card-title">{props.title} </h5>
				<p className="card-text">{props.text}</p>
				<a href={props.linkbtn} className="btn btn-primary">
					{props.textbtn}
				</a>
			</div>
		</div>
	);
};
Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string,
	linkbtn: PropTypes.string,
	textbtn: PropTypes.string,
};
export default Card;