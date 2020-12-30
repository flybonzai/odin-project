import { useState } from "react";
import "./style/App.css";
import Gameboard from "./components/Gameboard";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="App">
      <div className="Header">
        <div className="Title">Celebrity Memory Game</div>
        <div className="Scoreboard">
          Score: {currentScore} High Score: {highScore}
        </div>
      </div>
      <div className="Instructions">
        Get points by clicking on an image but don't click on any more than
        once!
      </div>
      <Gameboard
        tileCount={10}
        highScore={highScore}
        setHighScore={setHighScore}
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
      />
    </div>
  );
}

export default App;
