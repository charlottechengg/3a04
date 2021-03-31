import React from 'react';
import Timer from './Timer.js';

const GameHeader = props => {
	return (
		<div>
			<div className="game-header">
				<div className="header-left">
					<div>
						<button className="header-btn" onClick={props.handlePause}>
							{props.pause ? 'Resume' : 'Pause'}
						</button>
					</div>
					<div>
						<button className="header-btn" onClick={props.onExit}>
							Exit
						</button>
					</div>
				</div>
				<div className="header-right">
					<div className="header">
						<Timer
							initialMinutes={props.initialMinutes}
							initialSeconds={props.initialSeconds}
							addSeconds={props.addSeconds}
							pause={props.pause}
							onTimer={props.handleTimer}
							updateTimer={props.updateTimer}
						/>
					</div>
					<div className="header">
						Accuracy{' '}
						{props.currIndex && Math.round((props.numCorrect * 100) / props.currIndex)}%{' '}
					</div>
					<div className="header">
						<div>{props.levelCount} / 5</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameHeader;
