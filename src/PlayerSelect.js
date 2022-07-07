import React, { useState } from "react";

const PlayerSelect = ({ startGame, setStartGame, handleChange, handleChange2, whoStarts }) => {
  /* When one of the twos buttons is clicked, Change start value to true
   */
  const functionsCaller = (e) => {
    e.preventDefault();
    setStartGame({
      start: !startGame.start,
    });
  };

  return (
    <div className="main-section">
      <p className="header-paragraph mt-5 fw-bold">Pick a Weapon</p>
      <div className="main-section-container bg-dark">
        <h3 className="weapon-title fw-bold">Choose Your Weapon</h3>
        <form action="" onSubmit={functionsCaller}>
          <div className="inputs-container mt-4">
            <input
              onChange={handleChange}
              type="text"
              name="user1"
              placeholder="Player 1 Username"
              required
            />
            <input
              onChange={handleChange2}
              type="text"
              name="user2"
              placeholder="Player 2 Username"
              required
            />
          </div>
          <div className="weapons-container mt-4">
            <button type="submit" className="X weapon weapon-yellow display-3" onClick={whoStarts}>
              X
            </button>
            <button type="submit" className="O weapon weapon-blue display-3" onClick={whoStarts}>
              O
            </button>
            <div className="btn-container mt-4">
              {/* <button className="btn btn-primary" type="submit">
                Click to submit
              </button> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlayerSelect;
