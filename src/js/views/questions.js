import React, { useState, useContext, useEffect } from "react";
import { Question } from "../component/question";
import { MenuBar } from "../component/menu-bar";
import { Context } from "../store/app-context";

export const Questions = () => {
	const { store, actions } = useContext(Context);
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const allQuestions = getAllQuestions();
		const questionsMap = mapQuestions(allQuestions);
		setQuestions(questionsMap);
	}, []);

	function getAllQuestions() {
		return actions.getAllQuestions();
	}

	function mapQuestions(allQuestions) {
		let questionsMap;
		if (allQuestions) {
			questionsMap = allQuestions.map(function(question, index) {
				return (
					<Question key={index} id={question.id} title={question.title} description={question.description} />
				);
			});
		}
		return questionsMap;
	}

	return (
		<div className="container">
			<MenuBar />
			<div className="container">{questions}</div>
		</div>
	);
};