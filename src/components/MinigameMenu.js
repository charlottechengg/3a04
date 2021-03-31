import React from 'react';
import '../MinigameMenu.css';
import chalkboardImg from './Assets/menu-minigame1.png';

const MinigameMenu = () => {
	return (
		<div className="menu-container">
			<ul className="cards">
				<li className="cards__item">
					<div className="card">
						<img
							className="card__image"
                            src = {chalkboardImg}
                            alt = "chalkboard"
						/>
						<div className="card__content">
							<div className="card__title">Chalkboard Challenge</div>
							<p className="card__text">
                            Challenge your calculation and estimation with our best math game.{' '}
							</p>
							<button className="card__btn">Start</button>
						</div>
					</div>
				</li>
				<li className="cards__item">
					<div className="card">
                        <img
							className="card__image"
                            src = {chalkboardImg}
                            alt = "chalkboard"
                            />
                            <div className="card__content">
							<div className="card__title">Minigame 2</div>
							<p className="card__text">
								Description
							</p>
							<button className="card__btn">Start</button>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default MinigameMenu;
