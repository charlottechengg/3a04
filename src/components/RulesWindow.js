import React from 'react';
import startImg from './Assets/next.png';
import leftArrowImg from './Assets/left-arrow.png';
import rightArrowImg from './Assets/right-arrow.png';
import upArrowImg from './Assets/up-arrow.png';

const RulesWindow = (props) => {
	return (
		<div className="window-container">
			<div className="window">
				<div className="rules-cover">
					<h4 className="rules-heading">
						<span className="rules-heading-span">Chalkboard Challenge</span>
					</h4>
				</div>
				<div className="rules-details">
					<div className="rules-details">
						<p className="mathp">
							Train your arithmetic skills by determing <br /> which one is greater
						</p>
						<p>Use arrow keys on your keyboard to play. </p>
						<div className="rules-instruction">
							<div className="instruction">
								<div>LEFT</div>
								<img className="arrow-keys left icons" src={leftArrowImg} />
							</div>
							<div className="instruction">
								<div>EQUAL</div>
								<img className="arrow-keys up icons" src={upArrowImg} />
							</div>
							<div className="instruction">
								<div>RIGHT</div>
								<img className="arrow-keys right icons" src={rightArrowImg} />
							</div>
						</div>
					</div>
				</div>
				{!props.pause && (
					<div className="rules-button">
						<button className="btn" onClick={props.closeRules}>
							Start
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default RulesWindow;
