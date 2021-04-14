import React from "react";
import "../MinigameMenu.css";
import chalkboardImg from "./Assets/menu-minigame1.png";
import matchImg from "./Assets/menu-minigame2.png";
import lampImg from "./Assets/lamp.png";
import wuhooImg from "./Assets/menu-minigame3.png";
import { useHistory } from "react-router-dom";
const MinigameMenu = () => {
  const history = useHistory();
  function handleMath(path) {
    history.push(path);
  }
  function handleMemory(path) {
    history.push(path);
  }
  return (
    <div className="menu-container">
      <h1 className="menu-title">Get started.</h1>
      <div className="cards_menu">
        <span className="cards__item">
          <span className="card">
            <img className="card__image" src={chalkboardImg} alt="chalkboard" />
            <div className="card__content">
              <div className="card__title">Chalkboard Challenge</div>
              <p className="card__text">
                Developer: Manyi Cheng <br />
                Challenge your calculation and estimation with our best math
                game. Chalkboard Challenge improves the quantitative reasoning
                and problem-solving skills.{" "}
              </p>
              <button
                className="card__btn"
                onClick={() => handleMath("Mathgame")}
              >
                {" "}
                Start
              </button>
            </div>
          </span>
        </span>
        <span className="cards__item">
          <span className="card">
            <img className="card__image" src={matchImg} alt="chalkboard" />
            <div className="card__content">
              <div className="card__title">Match Pokemons</div>
              <p className="card__text">
                Developer: Shuming Zhang <br/>
                Challenge yourself with the most popular memory game. Quickly
                memorizing and comparing the pokemons challenges your working
                memory.
              </p>
              <button
                className="card__btn"
                onClick={() => handleMath("Memory")}
              >
                Start
              </button>
            </div>
          </span>
        </span>
        <span className="cards__item">
          <span className="card">
            <img className="card__image" src={wuhooImg} alt="chalkboard" />
            <div className="card__content">
              <div className="card__title">Wuhoo!</div>
              <p className="card__text">
                Developer: Manyi Cheng <br />
                Challenge your knowledge with the most popular quiz game. Pick
                the correct option challenges your understanding of computer
                science.
              </p>
              <button className="card__btn" onClick={() => handleMath("wuhoo")}>
                Start
              </button>
            </div>
          </span>
        </span>
        <span className="cards__item">
          <span className="card">
            <img className="card__image" src={lampImg} alt="chalkboard" />
            <div className="card__content">
              <div className="card__title">Coming soon.</div>
              <p className="card__text"></p>
            </div>
          </span>
        </span>
      </div>
    </div>
  );
};

export default MinigameMenu;
