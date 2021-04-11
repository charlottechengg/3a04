import React, {Component} from 'react';

class ScoreButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 0,
            userName: 'User',
            scoreChalk: 0,
            scorePair: 0,
            scoreQuiz: 0,
            text: 'dummy',
            showScore: false
        };

        // This binding is necessary to make `this` work in the callback
        this.regenerateText = this.regenerateText.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.regenerateText();
    }

    regenerateText() {
        this.setState(state => ({
            text: state.userName + ' (#' + state.userID + '): Chalkboard Score is '
                + state.scoreChalk + ', Pair Score is '
                + state.scorePair + ', Quiz Score is '
                + state.scoreQuiz
        }));
    }

    handleClick() {
        this.setState(state => ({
            showScore: !state.showScore
        }));

        this.regenerateText();
    }

    updateUser(newID, newName) {
        this.setState(state => ({
            userID: newID,
            userName: newName
        }));

        this.regenerateText();
    }

    updateScoreChalk(props) {
        let finalScore;
        finalScore = props.numCorrect / (props.currIndex + 1);
        
        this.setState(state => ({
            scoreChalk: finalScore
        }));

        this.regenerateText();
    }

    updateScorePair(props) {
        let finalScore;
        finalScore = props.score + props.timeLeft * 2;

        this.setState(state => ({
            scorePair: finalScore
        }));

        this.regenerateText();
    }

    updateScoreQuiz(props) {
        let finalScore;
        finalScore = Math.round((props.numCorrect * 100) / props.currIndex);
        
        this.setState(state => ({
            scoreQuiz: finalScore
        }));

        this.regenerateText();
    }

    render() {
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
    }
}

export default ScoreButton;