import React from "react";
import { Link } from "react-router-dom";
import { QuestionDetail } from "../views/question-detail";
import PropTypes from "prop-types";
import { BadgeInfo } from "./bootstrap/badge-info";

export const Question = props => {
	Question.propTypes = {
		id: PropTypes.string,
		title: PropTypes.string,
		description: PropTypes.string,
		isAnswered: PropTypes.bool,
		numberOfAnswers: PropTypes.number
	};

	return (
		<div className="card mb-3">
			<div className="card-header">
				<div className="row justify-content-end">
					<BadgeInfo label={"Solved"} color={"success"} />
					<BadgeInfo label={"Answers"} amount={props.numberOfAnswers} color={"info"} />
				</div>
			</div>
			<div className="card-body">
				<Link to={"/question-detail/" + props.id}>
					<h4 className="card-title">{props.title}</h4>
				</Link>
			</div>
		</div>
	);
};
