import React, { Component } from 'react';
import '../Chalkboard.css';
import GameHeader from './GameHeader.js'
import Pair from './Pair.js';
import RulesWindow from './RulesWindow.js';
import { evaluate } from 'mathjs';
import correctImg from './Assets/check.png';
import wrongImg from './Assets/delete.png';
import leftArrowImg from './Assets/left-arrow.png';
import rightArrowImg from './Assets/right-arrow.png';
import upArrowImg from './Assets/up-arrow.png';
class Chalkboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rules: true,
			numCorrect: 0,
			minutes: 1,
			seconds: 0,
			currIndex: 0,
			rightExpressions: [],
			leftExpressions: [],
			rightValues: [],
			leftValues: [],
			gameOver: false,
			levelCount: 0,
			addSeconds: 0,
			pause: false,
		};
		this.closeRules = this.closeRules.bind(this);
		this.handleTimer = this.handleTimer.bind(this);
		this.isGameOver = this.isGameOver.bind(this);
		this.resetGame = this.resetGame.bind(this);
		this.isBigger = this.isBigger.bind(this);
		this.isSmaller = this.isSmaller.bind(this);
		this.isEqual = this.isEqual.bind(this);
		this.keyHandling = this.keyHandling.bind(this);
		this.updateNextPair = this.updateNextPair.bind(this);
		this.generateRandomExpressions = this.generateRandomExpressions.bind(this);
		this.expressionToString = this.expressionToString.bind(this);
		this.displayCorrectness = this.displayCorrectness.bind(this);
		this.updateNextLevel = this.updateNextLevel.bind(this);
		this.updateTimer = this.updateTimer.bind(this);
		this.handlePause = this.handlePause.bind(this);
		this.onExit = this.onExit.bind(this);
	}

	componentWillMount() {
		this.resetGame();
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.keyHandling);
	}

	closeRules() {
		this.setState({
			rules: false,
		});
		window.addEventListener('keydown', this.keyHandling);
	}

	async resetGame() {
		let [exps, vals] = this.generateRandomExpressions();
		this.setState({
			rules: true,
			numCorrect: 0,
			minutes: 10,
			seconds: 2,
			currIndex: 0,
			leftExpressions: exps[0],
			rightExpressions: exps[1],
			leftValues: vals[0],
			rightValues: vals[1],
			gameOver: false,
			levelCount: 0,
			addSeconds: 0,
			pause: false,
		});
	}

	keyHandling(e) {
		if (e.keyCode === 38) {
			this.updateNextPair(this.isEqual(this.state.currIndex));
		} else if (e.keyCode === 37) {
			this.updateNextPair(this.isBigger(this.state.currIndex));
		} else if (e.keyCode === 39) {
			this.updateNextPair(this.isSmaller(this.state.currIndex));
		}
	}

	updateNextPair(correct) {
		if (correct) {
			this.setState({
				numCorrect: this.state.numCorrect + 1,
				currIndex: this.state.currIndex + 1,
			});
		} else {
			this.setState({
				currIndex: this.state.currIndex + 1,
			});
		}
		this.updateNextLevel(correct);
		this.displayCorrectness(correct);
		return this.isGameOver();
	}

	updateNextLevel(correct) {
		if (correct) {
			let sec = this.state.levelCount === 4 ? 5 : 0;
			this.setState(
				{
					levelCount: (this.state.levelCount + 1) % 5,
					addSeconds: sec,
				},
				() => this.updateTimer()
			);
		} else {
			this.setState({
				levelCount: this.state.levelCount <= 0 ? 0 : this.state.levelCount - 1,
			});
		}
	}

	updateTimer() {
		this.setState({ addSeconds: 0 });
	}

	displayCorrectness(correct) {
		let path = correct ? correctImg : wrongImg;
		let altText = correct ? 'Correct' : 'Wrong';
		let node = document.createElement('img');
		node.src = path;
		node.setAttribute('class', 'game-content correctness-image');
		node.setAttribute('alt', altText);
		node.setAttribute('position', 'absolute');
		node.setAttribute('height', '80px');
		node.setAttribute('width', 'auto');
		node.setAttribute('z-index', '20');
		document.getElementById('game-middle').append(node);
		setTimeout(() => {
			document.getElementById('game-middle').removeChild(node);
		}, 300);
	}

	isBigger(i) {
		if (this.state.leftValues[i] > this.state.rightValues[i]) {
			return true;
		}
		return false;
	}

	isSmaller(i) {
		if (this.state.leftValues[i] < this.state.rightValues[i]) {
			return true;
		}
		return false;
	}

	isEqual(i) {
		if (this.state.leftValues[i] === this.state.rightValues[i]) {
			return true;
		}
		return false;
	}

	generateRandomExpressions() {
		let rightExpressions = [];
		let leftExpressions = [];
		let rightValues = [];
		let leftValues = [];
		// increasing difficulties
		for (var num = 1; num < 5; num++) {
			for (var level = 0; level < 5; level++) {
				for (var i = 0; i < 5; i++) {
					let leftExp = this.buildExpression(num, level);
					let rightExp = this.buildExpression(num, level);
					leftExpressions.push(this.expressionToString(leftExp));
					rightExpressions.push(this.expressionToString(rightExp));
					leftValues.push(evaluate(leftExp));
					rightValues.push(evaluate(rightExp));
				}
			}
		}
		return [
			[leftExpressions, rightExpressions],
			[leftValues, rightValues],
		];
	}

	buildExpression(num, level) {
		if (num === 0) return '';
		else if (num === 1) {
			if (level === 0) return Math.floor(Math.random() * 10);
			else if (level >= 1 && level < 4) return Math.floor(Math.random() * 20);
			else if (level >= 4 && level < 6) return Math.floor(Math.random() * 30) + 1;
			else return Math.floor(Math.random() * 50) + 1;
		}
		let numLeft = Math.ceil(num - 1);
		let leftSubTree = this.buildExpression(numLeft, level);
		let numRight = Math.floor(1);
		let rightSubTree = this.buildExpression(numRight, level);
		const operators = ['+', '-', '*', '/'];
		let op = operators[Math.floor(Math.random() * level)];
		let exp =
			num === 2
				? leftSubTree + ' ' + op + ' ' + rightSubTree
				: '(' + leftSubTree + ') ' + op + ' ' + rightSubTree;
		return exp;
	}

	expressionToString(exp) {
		let str = exp.toString().replace('*', '\u00D7').replace('/', '\u00F7');
		return str;
	}

	handleTimer() {
		window.removeEventListener('keydown', this.keyHandling);
		this.setState({
			gameOver: true,
		});
	}

	handlePause() {
		this.setState({
			pause: !this.state.pause,
		});
	}

	isGameOver() {
		if (this.state.currIndex >= 79) {
			window.removeEventListener('keydown', this.keyHandling);
			let text = this.state.numCorrect + ' / ' + (this.state.currIndex + 1);
			this.setState({
				gameOver: true,
				playerAccuracy: text,
			});

			return true;
		}
	}

	onExit(){
		// change to props.onExit later, direct back to menu or homepage
	}

	render() {
		if (this.state.rules) {
			return (
				<div>
					<div className="game-container">
						<RulesWindow closeRules={this.closeRules} />
					</div>
				</div>
			);
		} else if (this.state.gameOver) {
			return (
				<div style={{ display: 'flex' }}>
					<div className="game-container">
						<div className="window-container">
							<div className="window">
								<div className="gameover-container">
									<div>Game Over!</div>
									<div>
										Accuracy{' '}
										{this.state.currIndex &&
											Math.round((this.state.numCorrect * 100) / this.state.currIndex)}
										%
									</div>
									<button className="btn" onClick={this.resetGame}>
										Play Again
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<div className="game-container">
						<GameHeader
							handlePause = {this.handlePause} 
							onExit = {this.onExit} 
							initialMinutes={this.state.minutes} 
							initialSeconds={this.state.seconds} 
							addSeconds={this.state.addSeconds} 
							pause={this.state.pause} 
							handleTimer={this.handleTimer} 
							updateTimer={this.updateTimer} 
							numCorrect = {this.state.numCorrect} 
							currIndex = {this.state.currIndex} 
							levelCount = {this.state.levelCount}
						/>
						<div className="game-content" id="game-middle">
							<Pair
								rightExpression={this.state.rightExpressions[this.state.currIndex]}
								leftExpression={this.state.leftExpressions[this.state.currIndex]}
							/>
						</div>
						<div className="game-footer">
							<div className="footer">
								<div className="arrow-keys left">LEFT</div>
								<img className="arrow-keys left icons" src={leftArrowImg} />
							</div>
							<div className="footer">
								<div className="arrow-keys up icons">EQUAL</div>
								<img className="arrow-keys up icons" src={upArrowImg} />
							</div>
							<div className="footer">
								<div className="arrow-keys right">RIGHT</div>
								<img className="arrow-keys right icons" src={rightArrowImg} />
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Chalkboard;
