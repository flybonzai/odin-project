import { useState } from "react";
import "../style/Gameboard.css";

const Tile = (props) => {
  return (
    <div className="Tile" onClick={props.handleClick}>
      {props.number}
    </div>
  );
};

const Gameboard = (props) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(props.highScore);
  const [previouslyClicked, setPreviouslyClicked] = useState([]);
  const [tiles, setTiles] = useState(generateTiles(props.tileCount));

  const generateTiles = (tileCount) => {
    return [...Array(props.tileCount).keys()].map((n) => {
      return <Tile key={n} number={n} />;
    });
  };

  const shuffleTiles = (tiles) => {
    let tilesCopy = [...tiles];
    for (let i = tilesCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = tilesCopy[i];
      tilesCopy[i] = tilesCopy[j];
      tilesCopy[j] = temp;
    }
    setTiles(tilesCopy);
  };
  // TODO look at lifecycle methods for when stuff should re-render

  // See if new high score was achieved, set new high score if applicable, set current score to 0
  const handleClick = (evt) => {
    if (isGameOver(evt.target.value)) {

    }
  };

  const isGameOver = (val) => {
      return previouslyClicked.includes(val);
  }

  return <div className="Gameboard">{tiles}</div>;
};

export default Gameboard;
