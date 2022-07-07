import React, { useState } from "react";
import PlayerSelect from "./PlayerSelect";
import Board from "./Board";

function App() {
  // State that checks if one of the buttons is clicked and if, then render the board component
  const [startGame, setStartGame] = useState({
    start: false,
  });

  // State to store player 1 info
  const [player1, setPlayer1] = useState({
    name: "",
    symbol: "X",
  });

  // State to store player 2 info
  const [player2, setPlayer2] = useState({
    name: "",
    symbol: "O",
  });

  // State to checks which button is being clicked and then store its symbol
  const [whoStarts, setWhoStarts] = useState({
    symbol: "",
  });

  // Functions that sets the e.target.value of the inputs to the name property of the setPlayers states
  const handleChange = (e) => {
    setPlayer1({ ...player1, name: e.target.value });
  };

  const handleChange2 = (e) => {
    setPlayer2({ ...player2, name: e.target.value });
  };

  /* Function that sets the first className char to the symbol property of the whoStarts state. If
     the class of the button being clicked starts with "x weapon", then it sets "x" to be the
     symbol value
     
  */
  const handleClick = (e) => {
    setWhoStarts({ symbol: e.target.className[0] });
  };

  return (
    <>
      <div className="container-fluid pt-5 vh-100 text-center text-light bg-secondary">
        <div className="">
          <h1 className="header-title fw-bold">
            Tic Tac Toe <span className="smaller">in React.js</span>
          </h1>
          {/* If startGame state is true return board component if not, return the playerSelect component with their props values */}
          {startGame.start ? (
            <Board />
          ) : (
            <PlayerSelect
              startGame={startGame}
              setStartGame={setStartGame}
              handleChange={handleChange}
              handleChange2={handleChange2}
              whoStarts={handleClick}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
