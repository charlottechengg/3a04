import React, {Component} from 'react';

const ScoreButton = () => {
    function scoreButtonClicked() {
        alert('text');
    }

	return (
		<button onClick={scoreButtonClicked}>Click here!</button>
	);
};

export default ScoreButton;