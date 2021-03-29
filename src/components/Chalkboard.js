import React, { Component } from 'react';
import Timer from './Timer.js';
import Pair from './Pair.js';
import { evaluate } from 'mathjs';
import correctImg from './Assets/check.png';
import wrongImg from './Assets/delete.png';


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
			playerAccuracy: '0 / 0',
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
        this.expressionToString = this.expressionToString.bind(this)
;        this.displayCorrectness = this.displayCorrectness.bind(this);
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
	}

	async resetGame() {
		let [exps,vals] = this.generateRandomExpressions();
		this.setState({
			rules: true,
			numCorrect: 0,
			minutes: 1,
			seconds: 0,
			currIndex: 0,
			leftExpressions: exps[0],
            rightExpressions: exps[1],
			leftValues: vals[0],
            rightValues: vals[1],
			gameOver: false,
			playerAccuracy: '0 / 0',
		});

        window.addEventListener('keydown', this.keyHandling);
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
		let increment = correct ? 1 : 0;
		this.setState({
			currIndex: this.state.currIndex + 1,
			numCorrect: this.state.numCorrect + increment,
		});

		this.displayCorrectness(correct);
        return this.isGameOver();
	}

    displayCorrectness(correct){
        let path = correct ? correctImg : wrongImg;
        let altText = correct ? "Correct" : "Wrong";
        let node = document.createElement('img');
		node.src = path;
		node.setAttribute('class', 'game-middle');
        node.setAttribute('alt', altText);
        node.setAttribute('height', "80px");
        node.setAttribute('width', "auto");
		document.getElementById("game-middle").append(node);
		setTimeout(() => {
			document.getElementById("game-middle").removeChild(node);
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
        var j = 0;
		for (var num = 1; num < 5; num++) {
			for (var level = 0; level < 5; level++) {
				for (var i = 0; i < 4; i++) {
                    j++;
                    let leftExp = this.buildExpression(num, level);
                    let rightExp = this.buildExpression(num, level);
                    leftExpressions.push(this.expressionToString(leftExp));
					rightExpressions.push(this.expressionToString(rightExp));
                    leftValues.push(evaluate(leftExp));
                    rightValues.push(evaluate(rightExp));
				}
			}
		}
        console.log("j is " + j);
		return [[leftExpressions, rightExpressions], [leftValues,rightValues]];
	}

	buildExpression(num, level) {
		if (num === 0) return '';
		else if (num === 1) {
			if (level === 0) 
                return Math.floor(Math.random() * 10);
			else if (level >= 1 && level < 4) 
                return Math.floor(Math.random() * 20);
			else if (level >= 4 && level < 6) 
                return Math.floor(Math.random() * 30) + 1;
            else
                return Math.floor(Math.random() * 50) + 1;
		}
		let numLeft = Math.ceil(num-1);
		let leftSubTree = this.buildExpression(numLeft, level);
		let numRight = Math.floor(1);
		let rightSubTree = this.buildExpression(numRight, level);
		const operators = ['+', '-', '*', '/'];
		let op = operators[Math.floor(Math.random() * level)];
        let exp = (num === 2) ? leftSubTree + ' ' + op + ' ' + rightSubTree : '(' + leftSubTree + ') ' + op + ' ' + rightSubTree;
		return exp;
	}

    expressionToString(exp){
        // exp.forEach((item, index) => {
        //     if(item === '*') exp[index] = '\u00D7'; 
        //     else if(item === '/') exp[index] = '\u00F7'; });
        
        let str = exp.toString().replace('*', '\u00D7').replace('/','\u00F7');
        return str;

    }

    handleTimer() {
        window.removeEventListener('keydown', this.keyHandling);
        let text = this.state.numCorrect + ' / ' + (this.state.currIndex+1) ;
		this.setState({
			gameOver: true,
            playerAccuracy: text,
		});
	}

	isGameOver() {
        console.log('\u00D7', '\u00F7');
		if (this.state.currIndex >= 79) {
            window.removeEventListener('keydown', this.keyHandling);
			let text = this.state.numCorrect + ' / ' + (this.state.currIndex+1) ;
			this.setState({
				gameOver: true,
				playerAccuracy: text,
			});

			return true;
		}
	}


	render() {
		if (this.state.rules) {
			return (
				<div>
					<div className="game-container">
						<div className="window-container">
							<div className="window">
								<div className="rules-cover">
									<h4 className="rules-heading">
										<span className="rules-heading-span">Chalkboard Challenge</span>
									</h4>
								</div>
								<div className="rules-details">
									<ul className="rules-details">
										<li>Train your arithmetic skills by determing which one is greater</li>
										<li>Use arrow on your keyboard to play. </li>
										<li>Left</li>
										<li>Right</li>
										<li>Equal Up</li>
									</ul>
								</div>
								<div className="rules-button">
									<button className="start-button" onClick={this.closeRules}>
										Start
									</button>
								</div>
							</div>
						</div>
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
									<div>Accuracy: {this.state.playerAccuracy}</div>
									<button
										id="reset-button"
										disabled={false}
										className="playagain-button"
										onClick={this.resetGame}
									>
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
				<div style={{ display: 'flex' }}>
					<div className="game-container">
						<div className="game-corner">
							<Timer
								initialMinutes={this.state.minutes}
								initialSeconds={this.state.seconds}
								onTimer={this.handleTimer}
							/>
						</div>
						<div className="game-middle" id = "game-middle">
							<Pair
								rightExpression={this.state.rightExpressions[this.state.currIndex]}
								leftExpression={this.state.leftExpressions[this.state.currIndex]}
							/>
						</div>
						<div className="game-bottom"></div>
					</div>
				</div>
			);
		}
	}
}

export default Chalkboard;
