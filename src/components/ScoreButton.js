import React, {Component} from 'react';

class ScoreButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 0,
            userName: 'User',
            gameID: -1,
            gameScore: 0,
            text: ''
        };

        this.regenerateText();

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    regenerateText() {
        this.setState(state => ({
            text: this.state.userName + ' (#' + this.state.userID + ') Score on Game '
                + this.state.gameID + ': ' + this.state.gameScore
        }));
    }

    handleClick() {
        this.regenerateText();
        /*this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));*/
    }

    render() {
        const {text} = this.state;
        return (
            <div>
                <button onClick={this.handleClick}>Update Score</button>
                <p>{text}</p>
            </div>
        );
    }
}

export default ScoreButton;