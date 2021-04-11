import React, {Component} from 'react';

class ScoreButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 0,
            userName: 'User',
            score1: 0,
            score2: 0,
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
            text: state.userName + ' (#' + state.userID + '): Score on Game 1 is '
                + state.score1 + ', Score on Game 2 is ' + state.score2
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

    updateScore1(score) {
        let finalScore;
        finalScore = score;
        //insert calculations here
        
        this.setState(state => ({
            score1: finalScore
        }));

        this.regenerateText();
    }

    updateScore2(score) {
        let finalScore;
        finalScore = score;
        //insert calculations here

        this.setState(state => ({
            score2: finalScore
        }));

        this.regenerateText();
    }

    render() {
        const {text} = this.state;

        return (
            <div>
                <button onClick={this.handleClick}>Toggle Score Display</button>
                { this.state.showScore &&
                    <p>
                        {text}
                    </p>
                }
            </div>
        );
    }
}

export default ScoreButton;