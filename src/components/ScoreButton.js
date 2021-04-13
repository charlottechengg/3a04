import React, { Component } from "react";
import {pokemonData, chalkboardData, quizData} from './UserAssessment.js';

class ScoreButton extends Component {
  state = {
    userID: 0,
    userName: "User",
    scoreChalk: 0,
    scorePair: 0,
    scoreQuiz: 0,
    text: "dummy",
    showScore: false,
    shouldUpdateScore: false
  };

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    /*this.regenerateText = this.regenerateText.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.updateScoreChalk = this.updateScoreChalk.bind(this);
        this.updateScorePair = this.updateScorePair.bind(this);
        this.updateScoreQuiz = this.updateScoreQuiz.bind(this);
        this.getText = this.getText.bind(this);*/

    this.regenerateText();
  }

  regenerateText() {
    /*this.setState(state => ({
            text: state.userName + ' (#' + state.userID + '): Chalkboard Score is '
                + state.scoreChalk + ', Pair Score is '
                + state.scorePair + ', Quiz Score is '
                + state.scoreQuiz
        }));*/

    this.state.text =
      this.state.userName +
      ": Chalkboard Score is " + //' (#' + this.state.userID + '): Chalkboard Score is '
      this.state.scoreChalk +
      ", Pair Score is " +
      this.state.scorePair +
      ", Quiz Score is " +
      this.state.scoreQuiz;
  }

  handleClick() {
    this.state.showScore = !this.state.showScore;
  }

  updateUser(props) {
    this.state.userID = props.newID;
    this.state.userName = props.newName;
  }

  startedNewGame() {
      this.state.shouldUpdateScore = true;
  }

  updateScoreChalk(numCorrect, currIndex) {
    if (this.state.shouldUpdateScore) {
        this.state.shouldUpdateScore = false;

        this.state.scoreChalk = Math.round((numCorrect * 100) / currIndex);
        chalkboardData.data.push({label: new Date().toLocaleString(), value: this.state.scoreChalk});
        /*UserAssessment.setStateData("Chalkboard");
        UserAssessment.updateData(new Date().toLocaleString(), this.state.scoreChalk);
        UserAssessment.setStateData("Chalkboard");*/
    }
    return this.state.scoreChalk;
  }

  updateScorePair(scores, timeLeft) {
    if (this.state.shouldUpdateScore) {
        this.state.shouldUpdateScore = false;

        this.state.scorePair = scores + timeLeft * 2;
        pokemonData.data.push({label: new Date().toLocaleString(), value: this.state.scorePair});
        /*UserAssessment.setStateData("Pokemon");
        UserAssessment.updateData(new Date().toLocaleString(), this.state.scorePair);
        UserAssessment.setStateData("Pokemon");*/
    }
    return this.state.scorePair;
  }

  updateScoreQuiz(numCorrect, currIndex) {
    if (this.state.shouldUpdateScore) {
        this.state.shouldUpdateScore = false;

        this.state.scoreQuiz = Math.round((numCorrect * 100) / currIndex);
        quizData.data.push({label: new Date().toLocaleString(), value: this.state.scoreQuiz});
        /*UserAssessment.setStateData("Quiz");
        UserAssessment.updateData(new Date().toLocaleString(), this.state.scoreQuiz);
        UserAssessment.setStateData("Quiz");*/
    }
    return this.state.scoreQuiz;
  }

  getText() {
    this.regenerateText();
    return this.state.text;
  }

  /*render() {
        const {text, showScore} = this.state;

        return (
            <div>
                <button onClick={this.handleClick}>Toggle Score Display</button>
                { showScore &&
                    <p>
                        {text}
                    </p>
                }
            </div>
        );
    }*/
}

const scoreManager = new ScoreButton();

export default scoreManager;
