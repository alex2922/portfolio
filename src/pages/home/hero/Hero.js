import React, { useState } from "react";
import "./Hero.scss";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Box({ value, onClick }) {
  return (
    <div className={`box glass ${value}`} onClick={onClick}>
      <div className="icons">
        {value === "circle" ? <FaRegCircle /> : value === "cross" ? <RxCross2 /> : null}
      </div>
    </div>
  );
}

function Hero() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("cross");

  // Function to handle clicks on each box
  function handleClick(index) {
    if (board[index] || checkWinner(board)) return; // Prevent clicking if box is filled or game is won

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "cross" ? "circle" : "cross"); // Toggle player
  }

  // Check for winner
  function checkWinner(b) {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of winningCombos) {
      if (b[a] && b[a] === b[b] && b[a] === b[c]) {
        return b[a];
      }
    }
    return null;
  }

  const winner = checkWinner(board);

  return (
    <div className="parent hero">
      <div className="hero-container container">
        <div className="left">
          <h1>Harsh Singh</h1>
          <p>Designer & Developer</p>
        
        </div>
        <div className="right">
        <p>Current Player: {currentPlayer}</p>
        {winner && <p>Winner: {winner}</p>}
        <button className="btn">reset</button>
          <div className="wrapper glass">
            {board.map((value, index) => (
              <Box key={index} value={value} onClick={() => handleClick(index)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
