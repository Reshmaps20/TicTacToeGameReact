import React, { useState } from 'react';
import './Board.css';

const GameBoard = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [isDraw, setIsDraw] = useState(false); 

    const handleClick = (index) => {

        if (squares[index] || winner) {
            return;
        }

        const newSquares = squares.slice();
        newSquares[index] = isXNext ? 'X' : 'O';
        setSquares(newSquares);

        const gameWinner = calculateWinner(newSquares);
        if (gameWinner) {
            setWinner(gameWinner);
        } else if (newSquares.every(square => square !== null)) {
            setIsDraw(true); 
        } else {
            setIsXNext(!isXNext);
        }
    };

    const renderRow = (i) => (
        <div role="row" className="board-row">
            <button className="board-button" onClick={() => handleClick(i)}>{squares[i]}</button>
            <button className="board-button" onClick={() => handleClick(i + 1)}>{squares[i + 1]}</button>
            <button className="board-button" onClick={() => handleClick(i + 2)}>{squares[i + 2]}</button>
        </div>
    );

    return (
        <div role="grid">
            <h1>Tic Tac Toe Game</h1>
            <div role="status" className="status"> {winner ? `Winner: ${winner}` : isDraw ? "Game is a Draw" : `Next player: ${isXNext ? 'X' : 'O'}`}</div>
            {renderRow(0)}
            {renderRow(3)}
            {renderRow(6)}
        </div>
    );

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8],
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];  
          }
        }
        return null;
      }
};

export default GameBoard;
