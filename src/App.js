import React, { useState } from "react";
import PlayerSelect from "./PlayerSelect";
import Board from "./Board";

function App() {
  const [startGame, setStartGame] = useState({
    start: false,
  });

  const [player1, setPlayer1] = useState({
    name: "",
    symbol: "X",
  });

  const [player2, setPlayer2] = useState({
    name: "",
    symbol: "O",
  });

  const [whoStarts, setWhoStarts] = useState({
    symbol: "",
  });

  const handleChange = (e) => {
    setPlayer1({ ...player1, name: e.target.value });
  };

  const handleChange2 = (e) => {
    setPlayer2({ ...player2, name: e.target.value });
  };

  const handleClick = (e) => {
    setWhoStarts({ symbol: e.target.className[0] });
  };

  console.log(whoStarts);

  return (
    <>
      <div className="container-fluid pt-5 vh-100 text-center text-light bg-secondary">
        <div className="">
          <h1 className="header-title fw-bold">
            Tic Tac Toe <span className="smaller">in React.js</span>
          </h1>
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
