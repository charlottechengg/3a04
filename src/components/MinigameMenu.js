import React from 'react';
import '../MinigameMenu.css';
import chalkboardImg from './Assets/menu-minigame1.png';
import lampImg from './Assets/lamp.png';

const MinigameMenu = () => {
	return (
		<div className="menu-container">
			<div className="cards">
				<span className="cards__item">
					<span className="card">
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
					</span>
				</span>
				<span className="cards__item">
					<span className="card">
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
					</span>
				</span>
				<span className="cards__item">
					<span className="card">
                        <img
							className="card__image"
                            src = {lampImg}
                            alt = "chalkboard"
                            />
                            <div className="card__content">
							<div className="card__title">Coming soon.</div>
							<p className="card__text">
								
							</p>
							
						</div>
					</span>
				</span>
			</div>
		</div>
	);
};

export default MinigameMenu;
