import React, {Component} from 'react';

class ScoreButton extends Component {
    state = {
        userID: 0,
        userName: 'User',
        scoreChalk: 0,
        scorePair: 0,
        scoreQuiz: 0,
        text: 'dummy',
        showScore: false
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

        this.state.text = this.state.userName + ' (#' + this.state.userID + '): Chalkboard Score is '
            + this.state.scoreChalk + ', Pair Score is '
            + this.state.scorePair + ', Quiz Score is '
            + this.state.scoreQuiz;
    }

    handleClick() {
        this.state.showScore = !this.state.showScore;
    }

    updateUser(props) {
        this.state.userID = props.newID;
        this.state.userName = props.newName;
    }

    updateScoreChalk(props) {
        this.state.scoreChalk = props.numCorrect / (props.currIndex + 1);
    }

    updateScorePair(props) {
        this.state.scorePair = props.scores + props.timeLeft * 2;
        return this.state.scorePair;
    }

    updateScoreQuiz(props) {
        this.state.scoreQuiz = Math.round((props.numCorrect * 100) / props.currIndex);
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