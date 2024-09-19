import './Board.css'; 

const GameBoard = () => {

    const handleClick = () => {
    };

    const renderRow = () => (
        <div role="row" className="board-row">
            <button className="board-button" onClick={handleClick}></button>
            <button className="board-button" onClick={handleClick}></button>
            <button className="board-button" onClick={handleClick}></button>
        </div>
    );

    return (
        <div role="grid">
            {renderRow()}
            {renderRow()}
            {renderRow()}
        </div>
    );
};

export default GameBoard;
