import React, { useState, useEffect } from 'react';
import GameHeader from './GameHeader';
import correctImg from './Assets/check.png';
import wrongImg from './Assets/delete.png';
import '../Quiz.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
const Rules = (props) => {
	return (
		<div className="quiz-rules-container">
			<h4 className="rules-title">
				<span className="rules-title-span">Wuhoo!</span>
			</h4>
			<div className="rules-description">
				<div>
					<p>
						<br />
						Train your memorization and learn right now by taking a quiz.
						<br />
					</p>
				</div>
				{!props.pause && (
					<div>
						<button className="quiz-option" onClick={props.closeRules}>
							Start
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

const Gameover = (props) => {
	const history = useHistory();
	function handleBack(path) {
		history.push(path);
	}
	return (
		<div className="quiz-rules-container">
			<h4 className="rules-title">
				<span className="rules-title-span">Congratulations!</span>
			</h4>
			<div className="rules-description">
				<div>
					<p>
						<br />
						Scores {props.score}
						<br />
						Accuracy {props.currIndex && Math.round((props.numCorrect * 100) / props.currIndex)}
						%
						<br />
						Keep up the work!
						<br />
					</p>
				</div>
				{!props.pause && (
					<div>
						<button className="quiz-option" onClick={props.reset}>
							Play Again
						</button>
						<button className="quiz-option" onClick={() => handleBack('')}>
							Exit
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

const Quiz = () => {
	const [quiz, setQuiz] = useState([]);
	const [number, setNumber] = useState(0);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [pause, setPause] = useState(false);
	const [level, setLevel] = useState(0);
	const [rules, setRules] = useState(true);
	const [addSeconds, setAddSeconds] = useState(0);

	const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
	const pickAnswer = (e) => {
		let userAnswer = e.target.outerText;
		let correct = quiz[number].answer === userAnswer;
		if (correct) setScore(score + 1);
		setNumber(number + 1);
		updateNextLevel(correct);
		if (number == 9) setGameOver(true);
		displayCorrectness(correct);
	};

	const reset = () => {
		setQuiz([]);
		setNumber(0);
		setScore(0);
		setGameOver(false);
		setPause(false);
		setLevel(0);
		setRules(true);
		setAddSeconds(0);
	};

	const updateNextLevel = (correct) => {
		if (correct) {
			setAddSeconds(level === 4 ? 5 : 0);
			setLevel((level + 1) % 5);
			// updateTimer()
		} else {
			setLevel(level <= 0 ? 0 : level - 1);
		}
	};

	const displayCorrectness = (correct) => {
		let path = correct ? correctImg : wrongImg;
		let altText = correct ? 'Correct' : 'Wrong';
		let node = document.createElement('img');
		node.src = path;
		node.setAttribute('class', 'game-content correctness-image');
		node.setAttribute('alt', altText);
		node.setAttribute('position', 'absolute');
		node.setAttribute('height', '40px');
		node.setAttribute('width', 'auto');
		node.setAttribute('z-index', '20');
		document.getElementById('quiz-bottom').append(node);
		setTimeout(() => {
			document.getElementById('quiz-bottom').removeChild(node);
		}, 300);
	};

	useEffect(() => {
		axios
			.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy')
			.then((res) => {
				setQuiz(
					res.data.results.map((item) => ({
						question: item.question,
						options: shuffle([...item.incorrect_answers, item.correct_answer]),
						answer: item.correct_answer,
					}))
				);
			})
			.catch((err) => console.error(err));
	}, [gameOver]);

	return (
		<div className="quiz">
			{rules && <Rules closeRules={() => setRules(!rules)} />}
			{gameOver && <Gameover score={score} reset={reset} numCorrect={score} currIndex={number} />}
			{!rules && (
				<div className="quiz-container">
					<div>
						<GameHeader
							className="quiz-header"
							handlePause={() => setPause(!pause)}
							handleTimer={() => setGameOver(true)}
							updateTimer={() => setAddSeconds(0)}
							initialMinutes={1}
							initialSeconds={0}
							pause={pause}
							numCorrect={score}
							currIndex={number}
							gameOver={gameOver}
							levelCount={level}
							addSeconds={addSeconds}
						/>
						{quiz[number] && (
							<div>
								<div
									className="quiz-question"
									dangerouslySetInnerHTML={{ __html: quiz[number].question }}
								></div>
								<div className="quiz-options">
									{quiz[number].options.map((item, index) => (
										<div
											className="quiz-option"
											key={index}
											dangerouslySetInnerHTML={{ __html: item }}
											onClick={pickAnswer}
										></div>
									))}
								</div>
							</div>
						)}
						<div className="quiz-bottom" id="quiz-bottom"></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Quiz;
