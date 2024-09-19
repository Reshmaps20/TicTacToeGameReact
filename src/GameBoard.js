import React, { useState } from 'react';
import './Board.css';

const GameBoard = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (index) => {
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
            {renderRow(0)}
            {renderRow(3)}
            {renderRow(6)}
        </div>
    );
};

export default GameBoard;
