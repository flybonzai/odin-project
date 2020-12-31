import { useEffect, useState } from "react";
import "../style/Gameboard.css";

const Tile = (props) => {
  return (
    <div className="Tile" key={props.number} value={props.number} onClick={props.handleClick}>
      {props.number}
    </div>
  );
};

const Gameboard = (props) => {
  const [tiles, setTiles] = useState([]);
  const [previouslySeen, setPreviouslySeen] = useState([]);

  const handleClick = (evt) => {
    const tileValue = evt.target.innerText;
    console.log(previouslySeen);
    if (!previouslySeen.includes(tileValue)) {
      props.setCurrentScore(current => current + 1);
      setPreviouslySeen(previousState => [...previousState, tileValue]);
    } else {
      alert("Game over, thanks for playing!");
      if (props.currentScore > props.highScore) {
        props.setHighScore(props.currentScore);
      }
      props.setCurrentScore(0);
      setPreviouslySeen([]);
    }
  };

  const generateTiles = (tileCount) => {
    return [...Array(tileCount).keys()].map((n) => {
      return <Tile key={n} number={n} handleClick={handleClick} />;
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

    return tilesCopy;
  };

  useEffect(() => {
    const initialTiles = generateTiles(props.tileCount);
    setTiles(shuffleTiles(initialTiles));
  }, []);

  useEffect(() => {
    setTiles((oldTiles) => {
      const newTiles = shuffleTiles(oldTiles);
      return newTiles;
    });
  }, [props.currentScore, props.highScore]);

  return <div className="Gameboard">{tiles}</div>;
};

export default Gameboard;
