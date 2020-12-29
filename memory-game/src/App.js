import { useState, useEffect } from 'react';
import './style/App.css';
import Gameboard from './components/Gameboard'

function App() {
  const [topScore, setTopScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="App">
      <div className="Header">
        <div className="Title">Celebrity Memory Game</div>
        <div className="Scoreboard">Score: {currentScore} Top Score: {topScore}</div>
      </div>
      <div className="Instructions">
        Get points by clicking on an image but don't click on any more than once!
      </div>
      <Gameboard tileCount={10}/>
    </div>
  );
}

export default App;
