import React, { useEffect, useState } from "react";
import "./Memory.css";
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ReactStoreIndicator from "react-score-indicator";
import Modal from "./modal";
import logo from "./img/Poké_Ball_icon.png";
import ReactCountdownClock from "react-countdown-clock";
import scoreManager from './ScoreButton.js';

const url = "https://pokeres.bastionbot.org/images/pokemon";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      borderStyle: "solid",
      padding: "100px",
      borderColor: "#e73c7e",
      background: "#d0e0e6",
      margin: "100px",
    },
    btn_display: {
      textAlign: "center",
      marginTop: "6rem",
      display: "inline-block",
      padding: "5%",
    },
  })
);

export default function Memory() {
  var scores = 0;
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const [pairOfPokemons, setPairOfPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(120);
  const [popUp, setPopUp] = useState(false);
  const [seconds, setSeconds] = useState(50);
  const [timecontrol, SetTimecontrol] = useState(false);
  const pokemons = [
    { id: 1, name: "balbasaur" },
    { id: 4, name: "charizard" },
    { id: 7, name: "wartotle" },
    { id: 18, name: "bird" },
    { id: 25, name: "pikachu" },
    { id: 35, name: "pikachu" },
  ];
  // const [open, setOpen] = useState(false);
  const classes = useStyles();
  //currently there are 4 pokemons but we need the pair

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
  }
  useEffect(
    () => {
      setPairOfPokemons(shuffle([...pokemons, ...pokemons]));
    },
    { pairOfPokemons }
  );

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    //console.log(openedCard);
    if (openedCard.length > 0) {
      SetTimecontrol(true);
    }

    if (openedCard < 2) return;

    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];

    if (
      secondMatched &&
      firstMatched.id === secondMatched.id &&
      openedCard[0] !== openedCard[1] &&
      !matched.includes(firstMatched.id) &&
      !matched.includes(secondMatched.id)
    ) {
      setMatched([...matched, firstMatched.id]);
      let scores = score + 20;
      setScore(scores);
      if (scores >= 120) {
        let timeLeft = seconds; //THIS IS ALWAYS READING 50? NEEDS TO READ THE ACTUAL TIME LEFT
        setScore(scoreManager.updateScorePair(scores, timeLeft));
        setPopUp(true);
      }
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 500);
  }, [openedCard]);

  const handleClick = (e) => {
    setMatched([]);
    setOpenedCard([]);
    scores = 0;
    setScore(scores);
    setPairOfPokemons(shuffle([...pokemons, ...pokemons]));
    console.log(seconds);
    SetTimecontrol(false);
    scoreManager.startedNewGame();
  };
  const handleReply = (e) => {
    console.log(seconds);
    setMatched([]);
    setOpenedCard([]);
    let scores = 0;
    setScore(scores);
    setPairOfPokemons(shuffle([...pokemons, ...pokemons]));
    setPopUp(false);
    SetTimecontrol(false);
    scoreManager.startedNewGame();
  };

  const history = useHistory();
  function handleBack(path) {
    history.push(path);
  }
  return (
    <div className={classes.root}>
      <div className="Title">
        Match P
        <img className="logoo" src={logo} alt="o" width="100" />
        kemons
      </div>

      <div className="Score">
        <ReactStoreIndicator
          value={score}
          maxValue={maxScore}
          fadedOpacity={50}
        />
      </div>
      <div className="Time">
        {timecontrol && (
          <ReactCountdownClock
            seconds={50}
            color="#125523"
            alpha={0.9}
            size={150}
          />
        )}
        {!timecontrol && (
          <ReactCountdownClock
            seconds={50}
            color="#125523"
            alpha={0.9}
            size={150}
            paused={true}
          />
        )}
      </div>

      <div>
        {popUp && (
          <div>
            <Modal
              onChange={() => {
                setPopUp(false);
              }}
              score={score}
              Replay={() => handleReply()}
            />
          </div>
        )}
      </div>
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          //lets flip the card

          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(pokemon.id)) isFlipped = true;
          return (
            <div
              className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img
                    src={`${url}/${pokemon.id}.png`}
                    alt="pokemon-name"
                    width="100"
                  />
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bt1">
        <button className="Replay" onClick={() => handleClick()}>
          Replay
        </button>
        <p></p>
        <button className="Replay" onClick={() => handleBack("")}>
          Exit Game
        </button>
      </div>
    </div>
  );
}
