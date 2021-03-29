import React from 'react';
import startImg from './Assets/next.png';

const RulesWindow = props => {
	return (
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
					<img className="start-button" src = {startImg} style = {{height: "80px", cursor: "pointer"}} onClick={props.closeRules}/>
				</div>
			</div>
		</div>
	);
};

export default RulesWindow;
